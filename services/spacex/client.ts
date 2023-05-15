import axios from 'axios';
import getConfig from 'next/config';

const config = getConfig();

export const http = axios.create({
  baseURL: config.serverRuntimeConfig.spacexApiUrl,
});
