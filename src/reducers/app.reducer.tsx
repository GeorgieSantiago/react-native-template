import { IAppState, IPayload } from 'interfaces/ReduxStateProp';
import { defaultAppState } from 'config/defaultState';

export enum AppActions {
    HEALTH
}

function appReducer(state: IAppState = defaultAppState, {type, payload}: IPayload<AppActions>) : IAppState {
    switch(type) {
        case AppActions.HEALTH:
             if( !payload ) {
                 return {
                     ...state,
                     hasError: true,
                     error: new Error('Could not connect to the API')
                 }
             }
             return state;
        break;
        default:
            return state;
    }    
}

export default appReducer;