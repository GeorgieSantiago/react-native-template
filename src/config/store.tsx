import {createStore, combineReducers} from 'redux';
import appReducer from 'reducers/app.reducer';

const store = createStore(combineReducers({
    appReducer
}));

export default store;
