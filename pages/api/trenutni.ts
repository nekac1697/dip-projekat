import { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

     //we want to fetch our current user. we do that using serverAuth
        //we dont need to check here if user exists bc we already did that in serverAuth and if theres an error
        //we will catch it in our catch
    if (req.method !== 'GET') {
      return res.status(405).end();
    }

    const { trenutniKorisnik } = await serverAuth(req, res);

    return res.status(200).json(trenutniKorisnik);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
