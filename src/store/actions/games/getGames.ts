import {
  GET_GAMES_REQUEST,
  GET_GAMES_SUCCESS,
  GET_GAMES_FAILURE,
} from '@/store/types/games/getGames';
import { IGames, IGamesPagination, IRequestGetGames } from "@/dtos/games.dto";

export const getGamesRequest = (page: number = 1, keyword: string = ''): IRequestGetGames => ({
  type: GET_GAMES_REQUEST,
  payload: {
    page,
    keyword
  },
});

export const getGamesSuccess = (data: IGames[], pagination: IGamesPagination) => ({
  type: GET_GAMES_SUCCESS,
  payload: {
    data,
    pagination
  }
});

export const getGamesFailure = (error: string) => ({
  type: GET_GAMES_FAILURE,
  payload: { error },
});
