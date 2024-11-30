import { createStore, combineReducers } from 'redux';
import DataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
    DataReducer
});

const store = createStore(rootReducer);

export default store;