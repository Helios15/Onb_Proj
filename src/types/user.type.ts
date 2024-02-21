export interface GetListResponse<T> {
  data: Array<T>;
  total: number;
  page?: number;
  limit?: number;
  name?: string;
  age?: number;
}

export type UserNameType = {
  first: string;
  last: string;
};

export type FilterGetOptions = {
  _id?: string;
  name?: object;
  age?: number;
  isDeleted: boolean;
};
