import { combineReducers } from 'redux'
import { usersReducer, userReducer } from './user/userReducer'
import authReducer from './auth/authReducer'

const reducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    auth: authReducer
})

export default reducers
