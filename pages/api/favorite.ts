import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";
// pomocna funkcija koja izvrsava neku logiku
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { trenutniKorisnik } = await serverAuth(req, res);

      const { movieId } = req.body;
  
      const postojeciFilm = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });
  
      if (!postojeciFilm) {
        throw new Error('Nepostojeci ID');
      }
  
      const user = await prismadb.user.update({
        where: {
          email: trenutniKorisnik.email || '',
        },
        data: {
          favoriteIds: {
            push: movieId
          }
        }
      });
  
      return res.status(200).json(user);
    }

    if (req.method === 'DELETE') {
      const { trenutniKorisnik } = await serverAuth(req, res);

      const { movieId } = req.body;

      const postojeciFilm = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        }
      });

      if (!postojeciFilm) {
        throw new Error('Nepostojeci ID');
      }

      const azuriraniFavoriteIds = without(trenutniKorisnik.favoriteIds, movieId);

      const azuriraniKorisnik = await prismadb.user.update({
        where: {
          email: trenutniKorisnik.email || '',
        },
        data: {
          favoriteIds: azuriraniFavoriteIds,
        }
      });

      return res.status(200).json(azuriraniKorisnik);
    }
    
    return res.status(405).end();
  } catch (error) {
    console.log(error);

    return res.status(500).end();
  }
}
