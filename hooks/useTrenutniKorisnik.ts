/*
    We are using this file for our frontend
*/

import useSwr from 'swr'
//swr is a vercel developed package used for fetching data. It is similar to react query
//first time we fetch useTrenutniKorisnik, it wont fetch again if the data already exists  
//we dont need redox with this


import fetcher from '@/libs/fetcher';

const useTrenutniKorisnik = () => {
   //useSwr gets the key(usually as api url) and passes it to fetcher
  const { data, error, isLoading, mutate } = useSwr('/api/trenutni', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  }
};

export default useTrenutniKorisnik;
