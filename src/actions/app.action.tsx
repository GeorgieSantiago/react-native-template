import { AxiosError } from 'axios';
import { IResponse, BaseContext } from 'interfaces/RequestProps';
import { health } from 'request/app.request';
import { AppActions } from 'reducers/app.reducer';
import { IPayload } from 'interfaces/ReduxStateProp';

export const healthCheck = async () =>  {
    const response  = await health();
    return {
        type: AppActions.HEALTH,
        payload: response
    };
}