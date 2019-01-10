import * as types from '../../chats/actions/actionTypes';
import * as socketsTypes from '../../sockets/actions/actionTypes';

const initialState = [];

// eslint-disable-next-line
export const messages = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CHAT_SUCCESS:
            return action.payload.chat.messages;
        case socketsTypes.RECEIVE_MESSAGE:
            return [...state, action.payload.message];
        default:
            return state;
    }
};
