import axios, {AxiosError, AxiosResponse} from 'axios';

/**
 * Configure axios
 */
const net = axios.create({
  baseURL: process.env.API_URL,
});

/**
 * Inject OAuth token or logout
 */
net.interceptors.request.use(
  (req: any) => req,
  (e: AxiosError) => e,
);

/**
 * Handle headers and network errors
 */
net.interceptors.response.use(
  (res: AxiosResponse) => res,
  (e: AxiosError) => e,
);

export default net;
