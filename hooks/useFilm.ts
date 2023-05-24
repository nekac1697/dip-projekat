import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useFilm = (id?: string) => {
      //options object that we use to disable some settings. Used to load only when user visits the page, not every time its focus is out

  const { data, error, isLoading } = useSwr(id ? `/api/filmovi/${id}` : null, fetcher, {
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

export default useFilm;
