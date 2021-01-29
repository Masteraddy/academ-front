import axios from 'axios';
import nookies from 'nookies';

const myApi = axios.create({
  baseURL:
    process.env.NODE_ENV == 'production'
      ? process.env.NEXT_PUBLIC_API_URL
      : 'http://localhost:3030',
});
const localUse = (ctx = {}) => {
  myApi.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${nookies.get(ctx).token}`;
      return config;
    },
    (error) => {
      console.log('error axios!');
      return Promise.reject(error);
    },
  );
  return myApi;
};

export { localUse };
export default localUse();
