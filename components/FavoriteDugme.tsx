import axios from 'axios';
import React, { useCallback, useMemo } from 'react';
import {BsPlusLg, BsCheckLg} from 'react-icons/bs';

import useTrenutniKorisnik from '@/hooks/useTrenutniKorisnik';
import useFavorites from '@/hooks/useFavorites';

interface FavoriteDugmeProps {
  movieId: string
}

const FavoriteDugme: React.FC<FavoriteDugmeProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: trenutniKorisnik, mutate } = useTrenutniKorisnik();

   //check fariable to check if movie is fav

    //once we click toggleFavorite we check if the current movie is favorited
    // if it is fav we delete it, if not we add it

  const isFavorite = useMemo(() => {
    const list = trenutniKorisnik?.favoriteIds || [];

    return list.includes(movieId);
  }, [trenutniKorisnik, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {

       //for post reqest no need to specify data
      response = await axios.delete('/api/favorite', { data: { movieId } });
    } else {
      response = await axios.post('/api/favorite', { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({ 
      ...trenutniKorisnik, 
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isFavorite, trenutniKorisnik, mutate, mutateFavorites]);
  
  const Icon = isFavorite ? BsCheckLg : BsPlusLg;

  return (
    <div onClick={toggleFavorites}
     className="
     cursor-pointer 
     group/item 
     w-6 h-6 
     lg:w-10 lg:h-10
      border-white
       border-2
      rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  )
}

export default FavoriteDugme;
