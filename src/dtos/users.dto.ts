export interface IUsers {
  id: string,
  username: string,
  email: string,
  avatar?: string,
  role: string,
  updatedAt: string,
  createdAt: string,
}

export interface IUsersPagination {
  page: number,
  limit: number,
  total: number
}

/* REQUEST */

export interface IGetUsersRequest {
  type: string,
  payload: {
    page: number,
    keyword: string
  }
}


/* RESPONSE */

export interface IResponseBase {
  message: string;
  statusCode: number;
}

export interface IResponseUsers extends IResponseBase {
  data: IUsers[],
  pagination: IUsersPagination
}
