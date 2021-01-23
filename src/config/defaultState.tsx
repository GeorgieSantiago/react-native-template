import {IAppState, IAuthState} from 'interfaces/ReduxStateProp';

export const defaultAppState: IAppState = {
  loading: false,
  error: null,
  hasError: false,
};

export const defaultAuthState: IAuthState = {
  id: null,
  updated_at: null,
};
