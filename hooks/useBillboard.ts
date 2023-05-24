import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useBillboard = () => {
   //options object that we use to disable some settings. Used to load only when user visits the page, not every time its focus is out
  const { data, error, isLoading } = useSwr('/api/random', fetcher, { 
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

export default useBillboard;
