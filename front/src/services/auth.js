import { api } from '../infra/api/base';

export const createUser = async (credentials) => {
  const response = await api.post('/user', credentials);
  return response;
};

export const authenticateUser = async (credentials, callback = () => {}) => {
  const response = await api.post('/auth', credentials);
  const user = response?.data?.user;
  callback(user);
  return response;
};

export const fetchUser = async ({ id, ...credentials }) => {
  const response = await api.get(`/user/${id}`, credentials);
  return response;
};
