import {
  ADD_GAME_REQUEST,
  ADD_GAME_SUCCESS,
  ADD_GAME_FAILURE,
} from '@/store/types/games/addGame';
import { IGameData, IRequestAddGame } from '@/dtos/games.dto';

export const addGameRequest = (data: IGameData): IRequestAddGame => ({
  type: ADD_GAME_REQUEST,
  payload: {
    data
  },
});

export const addGameSuccess = () => ({
  type: ADD_GAME_SUCCESS,
});

export const addGameFailure = (error: string) => ({
  type: ADD_GAME_FAILURE,
  payload: { error },
});
