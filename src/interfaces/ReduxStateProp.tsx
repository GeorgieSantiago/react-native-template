import { Action } from "redux";
import { ID } from "./NetworkProps";

export interface ReduxStateProp {}
export enum ActionType {}

export interface IPayload<T> {
    type: T;
    payload: any;
}

export interface IAppState extends ReduxStateProp {
    loading: boolean;
    error: Error | null;
    hasError: boolean;
}

export interface IAuthState extends ReduxStateProp {
    id: ID;
    updated_at: Date | null;
}

