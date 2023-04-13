import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token) => {
  api.defaults.headers.common.authorization = token;
};

export const requestData = async (endpoint) => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    console.error(error);
    return { token: null };
  }
};

export const requestLogin = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    console.error(error);
    return { token: null };
  }
};
export const requestRegister = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    return { token: null };
  }
};
export const requestPostData = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const updateSaleStatus = async (endpoint, body) => {
  try {
    const { data } = await api.patch(endpoint, body);
    return data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export default api;
