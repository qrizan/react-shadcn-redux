import {
  UPDATE_GAME_REQUEST,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_FAILURE,
} from '@/store/types/games/updateGame';
import { IGameData, IRequestUpdateGame } from '@/dtos/games.dto';

export const updateGameRequest = (id: string, data: IGameData): IRequestUpdateGame => ({
  type: UPDATE_GAME_REQUEST,
  payload: {
    id,
    data
  },
});

export const updateGameSuccess = () => ({
  type: UPDATE_GAME_SUCCESS,
});

export const updateGameFailure = (error: string) => ({
  type: UPDATE_GAME_FAILURE,
  payload: { error },
});
