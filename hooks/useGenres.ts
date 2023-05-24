// import useSWR from 'swr';
import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useGenres = () =>{
   const{data, error, isLoading, mutate} = useSWR('/api/genres', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
   }); 

   return{
    data,
    error,
    isLoading,
    mutate
   }


}

export default useGenres;