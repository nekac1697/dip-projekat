import axios from 'axios';
//axios makes http requests and if successful we recieve response with the data we wanted

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default fetcher;
