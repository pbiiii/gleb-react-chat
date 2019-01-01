import { combineReducers } from 'redux'
import { register } from './register'
import { login } from './login'
// import {token} from './token'

export const reducer = combineReducers({
    register,
    login,
    // token
})

