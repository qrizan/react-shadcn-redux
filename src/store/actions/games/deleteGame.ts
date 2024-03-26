import {
  DELETE_GAME_REQUEST,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_FAILURE,
} from '@/store/types/games/deleteGame';
import { IRequestDeleteGame } from '@/dtos/games.dto';

export const deleteGameRequest = (id: string): IRequestDeleteGame => ({
  type: DELETE_GAME_REQUEST,
  payload: {
    id
  },
});

export const deleteGameSuccess = () => ({
  type: DELETE_GAME_SUCCESS,
});

export const deleteGameFailure = (error: string) => ({
  type: DELETE_GAME_FAILURE,
  payload: { error },
});