export interface IGames {
  id: string,
  slug: string,
  title: string,
  imageUrl: string,
  genre: {
    name: string
  }
  user: {
    username: string
  }
  bookmarkedBy: number
}

export interface IGamesPagination {
  page: number,
  limit: number,
  total: number
}

export interface IGameDetail {
  id: string,
  title: string,
  content: string,
  imageUrl: string,
  releaseDate: Date,
  genreId: string,
}

export interface IGameData {
  title: string,
  content?: string,
  imageUrl: string,
  releaseDate: Date,
  genreId: string,
}

/* REQUEST */

export interface IRequestBase {
  type: string,
}

export interface IRequestGetGames extends IRequestBase {
  payload: {
    page: number,
    keyword: string
  }
}

export interface IRequestGetGameDetail extends IRequestBase {
  payload: {
    id: string
  }
}

export interface IRequestAddGame extends IRequestBase {
  payload: {
    data: IGameData
  }
}

export interface IRequestDeleteGame extends IRequestBase {
  payload: {
    id: string,
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface IRequestUpdateGame extends IRequestBase {
  payload: {
    id: string,
    data: IGameData
  }
}

export interface IRequestUploadImageGame extends IRequestBase {
  payload: {
    formData: object
  }
}

/* RESPONSE */

export interface IResponseBase {
  message: string;
  statusCode: number;
}

export interface IResponseGames extends IResponseBase {
  data: IGames[];
  pagination: IGamesPagination;
}

export interface IResponseGameDetail extends IResponseBase {
  data: IGameDetail;
}

export interface IResponseUploadImage extends IResponseBase {
  url: string;
}
