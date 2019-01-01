import { combineReducers } from 'redux'
import { reducer as auth } from './auth/reducers'


export default combineReducers({
    auth,
});
