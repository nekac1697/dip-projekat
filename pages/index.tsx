import React from 'react';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import FilmLista from '@/components/FilmLista';
import InfoModal from '@/components/InfoModal';
import useFilmLista from '@/hooks/useFilmLista';
import useFavorites from '@/hooks/useFavorites';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import useGenres from '@/hooks/useGenres';
import useTrenutniKorisnik from '@/hooks/useTrenutniKorisnik';

export async function getServerSideProps(context: NextPageContext) {

   //we cant use our serverAuth because its client side, and serverAuth is serverSide


  //with this function when there is no session we are redirected to auth pagr
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      }
    }
  }

  

  return {
    props: {}
  }
}

const Home = () => {
  const { data: movies = [] } = useFilmLista();
  const { data: favorites = [] } = useFavorites();
  const { data: genres = []} = useGenres();
  const { data: user = []} = useTrenutniKorisnik();
  const {isOpen, closeModal} = useInfoModalStore();




  
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <FilmLista title="Popularno" data={movies} />
        <FilmLista title= "Omiljeni " data={favorites} />
        <FilmLista title="Avanture" data={genres} />

      </div>
    </>
  )
}

export default Home;
