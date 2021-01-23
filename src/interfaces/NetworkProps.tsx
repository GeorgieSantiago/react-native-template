import {AxiosResponse} from 'axios';
export type ID = string | number | null;
export type NetworkParam = object[] | object | any[];
export interface NetworkContext {
  get: () => AxiosResponse;
  show: (idx: ID) => AxiosResponse;
  post: (form: NetworkParam) => AxiosResponse;
  patch: (idx: ID, form: NetworkParam) => AxiosResponse;
  delete: (idx: ID) => AxiosResponse;
}
