export interface RequestHeaders {}

export interface ResponseHeaders {}

export interface IResponse<T> {
  data: T;
}

export interface BaseContext {
  [key: string]: (prop?: any) => any;
}
