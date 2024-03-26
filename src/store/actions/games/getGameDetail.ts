import {
  GET_GAME_DETAIL_REQUEST,
  GET_GAME_DETAIL_SUCCESS,
  GET_GAME_DETAIL_FAILURE
} from '@/store/types/games/getGameDetail';
import { IGameDetail, IRequestGetGameDetail } from '@/dtos/games.dto';

export const getGameDetailRequest = (id: string): IRequestGetGameDetail => ({
  type: GET_GAME_DETAIL_REQUEST,
  payload: {
    id
  },
});

export const getGameDetailSuccess = (data: IGameDetail) => ({
  type: GET_GAME_DETAIL_SUCCESS,
  payload: {
    data
  }
});

export const getGameDetailFailure = (error: string) => ({
  type: GET_GAME_DETAIL_FAILURE,
  payload: { error },
});
