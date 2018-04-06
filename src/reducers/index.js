import { combineReducers } from 'redux';
import listReducers from './list_reducers';

export default combineReducers({
    list: listReducers
});