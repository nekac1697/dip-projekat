import { NextApiRequest, NextApiResponse } from "next";

import prismadb from '@/libs/prismadb';
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { trenutniKorisnik } = await serverAuth(req, res);

    const omiljeniFilmovi = await prismadb.movie.findMany({
      where: {
        id: {
          in: trenutniKorisnik?.favoriteIds,
        }
      }
    });

    return res.status(200).json(omiljeniFilmovi);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
