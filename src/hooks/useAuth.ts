import { Api } from '~/services/AxiosService';

export const useAuth = () => ({
  validateToken: async (token: string) => {
    const response = await Api.post('/validate', { token });
    return response.data;
  },

  signin: async (username: string, password: string) => {
    const response = await Api.post('/login', { username, password });
    return response.data;
  },

  logout: async () => {
    const response = await Api.post('/logout');
    return response.data;
  },
});
