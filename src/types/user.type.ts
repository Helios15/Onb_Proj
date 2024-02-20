export interface GetListResponse<T> {
  data: Array<T>;
  total: number;
  page?: number;
  limit?: number;
  name?: string;
  age?: number;
}

export type FilterGetOptions = {
  name?: string;
  age?: number;
  isDeleted: boolean;
};
