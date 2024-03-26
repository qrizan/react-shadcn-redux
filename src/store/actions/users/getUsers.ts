import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '@/store/types/users/getUsers';
import { IUsers, IUsersPagination, IGetUsersRequest } from "@/dtos/users.dto";

export const getUsersRequest = (page: number, keyword: string): IGetUsersRequest => ({
  type: GET_USERS_REQUEST,
  payload: {
    page,
    keyword
  },
});

export const getUsersSuccess = (data: IUsers[], pagination: IUsersPagination) => ({
  type: GET_USERS_SUCCESS,
  payload: {
    data,
    pagination
  }
});

export const getUsersFailure = (error: string) => ({
  type: GET_USERS_FAILURE,
  payload: { error },
});

