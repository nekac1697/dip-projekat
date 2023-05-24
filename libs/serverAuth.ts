// //we use serverAuth u nasem api kontroleru i prosledicemo req parametar
// //i taj req ce drzati jwt token koji getSession koristi da dobije ulogovanog korisnika(usera). Session nema sva polja koja smo definisali u model user pa moramo da modifikujemo

// //serverAuth cemo koristiti u svim api routes da proverimo da li smo ulogovani
// const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
//     const session = await getServerSession ({ req ,res,authOptions }); 

//     //Ako ne postoje sesija user ili email prikayi gresku
//     if(!session?.user?.email){
//         throw new Error('Niste ulogovani')
//     }

//     const trenutniKorisnik = await prismadb.user.findUnique({
//         where:{
//             email: session.user.email 
//         }
//     });

//     if(!trenutniKorisnik){
//         throw new Error('Niste ulogovani');
//     }

//     return { trenutniKorisnik};
// }

// export default serverAuth;

import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import prismadb from '@/libs/prismadb';
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error('Niste ulogovani');
  }

  const trenutniKorisnik = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    }
  });
  
  if (!trenutniKorisnik) {
    throw new Error('Niste ulogovani');
  }

  return { trenutniKorisnik };
}

export default serverAuth;
