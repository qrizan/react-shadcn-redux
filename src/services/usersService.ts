import { AxiosRequestConfig } from 'axios';
import api from '@/api/api';

/* GET USERS SERVICE */
export const getUsersService = async (token: string, page: number, keyword: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.get(`/user?page=${page}&keyword=${keyword}`, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};