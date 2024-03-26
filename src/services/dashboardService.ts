import { AxiosRequestConfig } from 'axios';
import api from '@/api/api';

export const getDashboardService = async (token: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.get(`/dashboard`, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};