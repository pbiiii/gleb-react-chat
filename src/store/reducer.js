import { combineReducers } from 'redux'
import { reducer as auth } from './auth/reducers'
import { chats } from './chats/reducers'


export default combineReducers({
    auth,
    chats,
});
