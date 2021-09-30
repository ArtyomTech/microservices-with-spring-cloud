import { combineReducers } from 'redux';
import { usersReducer, userReducer } from './userReducer';

const reducers = combineReducers({
    users: usersReducer,
    user: userReducer
});

export default reducers;
