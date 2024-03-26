export interface IGenres {
  id: string,
  name: string
}

/* REQUEST */

export interface IRequestBase {
  type: string,
}

export interface IRequestAddGenre extends IRequestBase {
  payload: {
    name: string
  }
}

export interface IRequestDeleteGenre extends IRequestBase {
  payload: {
    id: string
  }
}


/* RESPONSE */

export interface IResponseBase {
  message: string;
  statusCode: number;
}

export interface IResponseGenres extends IResponseBase {
  data: IGenres[];
}