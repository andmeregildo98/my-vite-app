
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const API = axios.create({
    baseURL: 'localhost:3000',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  });

