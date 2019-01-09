import { combineReducers } from 'redux';
/* eslint-disable import/named */
import { user } from './auth';
import { chats } from './chats/reducers';
import { messages } from './messages/reducers';
import { services } from './services/reducers';
/* eslint-enable import/named */

export default combineReducers({
    user,
    chats,
    messages,
    services,
});

export const getActiveUser = state => state.user.info;
// eslint-disable-next-line
export const getUserId = user => user._id;

export const isCreator = (state, chat) => {
    try {
        return getUserId(chat.creator) === getUserId(getActiveUser(state));
    } catch (e) {
        return false;
    }
};

export const isMember = (state, chat) => {
    try {
        return chat.members.some(
            member => getUserId(member) === getUserId(getActiveUser(state)),
        );
    } catch (e) {
        return false;
    }
};

export const isChatMember = (state, chat) => isCreator(state, chat) || isMember(state, chat);
