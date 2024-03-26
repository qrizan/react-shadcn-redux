export interface ILatestUser {
  id: string,
  username: string,
  email: string,
  avatar: string,
  createdAt: string
}

export interface IGamesBookmarked {
  month: string,
  count: number
}

export interface IDashboard {
  users: number,
  games: number,
  categories: number,
  bookmarks: number,
  latestUser: ILatestUser[],
  gamesBookmarked: IGamesBookmarked[],
}

/* REQUEST */

export interface IRequestGetDashboard {
  type: string,
}

/* RESPONSE */

export interface IResponseDashboard {
  data: IDashboard;
}