import { AxiosRequestConfig } from 'axios';
import api from '@/api/api';

/* GET GENRES SERVICE */
export const getGenresService = async (token: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.get('/genre', config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* ADD GENRE SERVICE */
export const addGenreService = async (token: string, name: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.post('/genre', { name }, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* DELETE GENRE SERVICE */
export const deleteGenreService = async (token: string, id: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.delete(`/genre/${id}`, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};