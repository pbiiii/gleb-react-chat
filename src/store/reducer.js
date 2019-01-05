import { combineReducers } from 'redux'
import { reducer as auth } from './auth/reducers'
import { chats } from './chats/reducers'
import { messages } from "./messages/reducers";


export default combineReducers({
    auth,
    chats,
    messages,
});

export const getActiveUser = (state) => state.auth.user.info
export const getUserId = (user) => user._id

export const isCreator = (state, chat) => {
    try {
        return getUserId(chat.creator) === getUserId(getActiveUser(state))
    } catch (e) {
        return false;
    }
}

export const isMember = (state, chat) => {
    try {
        return chat.members.some(
            member => getUserId(member) === getUserId(getActiveUser(state))
        )
    } catch (e) {
        return false
    }
}

export const isChatMember = (state, chat) => {
    return isCreator(state, chat) || isMember(state, chat)
}