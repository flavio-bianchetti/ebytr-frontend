// adaptado do request.js utilizado no frontend do projeto Trybe Futebol Clube
// https://github.com/tryber/sd-015-b-trybe-futebol-clube

import * as axios from "axios";
import 'dotenv/config';

const api = axios.create({
    baseURL: `${process.env.API_URL || 'http://localhost'}:${process.env.API_PORT || '3002'}`,
});

const setToken = (token) => {
  api.defaults.headers.common.Authorization = token;
};

const requestData = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;

export {
  setToken,
  requestData,
  requestLogin
};
