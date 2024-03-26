import { AxiosRequestConfig } from 'axios';
import api from '@/api/api';

/* GET GAMES SERVICE */
export const getGamesService = async (token: string, page: number, keyword: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.get(`/game?page=${page}&keyword=${keyword}`, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* GET GAME DETAIL SERVICE */
export const getGameDetailService = async (token: string, id: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.get(`/game/${id}`, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* ADD GAME SERVICE */
export const addGameService = async (token: string, data: object) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.post('/game', data, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* UPDATE GAME SERVICE */
export const updateGameService = async (token: string, id: string, data: object) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.patch(`/game/${id}`, data, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* UPLOAD GAME SERVICE */
export const uplaodImageGameService = async (token: string, formData: object) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    };

    const response = await api.post(`/game/image`, formData, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

/* DELETE GAME SERVICE */
export const deleteGameService = async (token: string, id: string) => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await api.delete(`/game/${id}`, config);
    return response.data;

  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};