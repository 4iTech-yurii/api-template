import axios from 'axios';
import { getTokenFromCookies } from '@/utils/helpers/getTokenFromCookies';

const CommonClient = axios.create({
  baseURL: process.env.BE_CANISTER,
});

CommonClient.interceptors.request.use(config => {
  const token = getTokenFromCookies();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { CommonClient };
