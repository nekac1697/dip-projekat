import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useFilmLista = () => {
  const { data, error, isLoading } = useSwr('/api/filmovi', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useFilmLista;
