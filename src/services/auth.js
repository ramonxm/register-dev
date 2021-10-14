import { api } from '../infra/api/base';

export const fetchUser = async (username) => {
  const response = await api.get(`/${username}`);
  return response;
};
