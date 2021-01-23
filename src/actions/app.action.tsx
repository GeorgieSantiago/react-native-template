import {health} from 'request/app.request';
import {AppActions} from 'reducers/app.reducer';

export const healthCheck = async () => {
  const response = await health();
  return {
    type: AppActions.HEALTH,
    payload: response,
  };
};
