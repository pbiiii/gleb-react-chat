import * as types from '@src/store/chats/actions/actionTypes'
import * as socketsTypes from '@src/store/sockets/actions/actionTypes'

const initialState = []

export const messages = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CHAT_SUCCESS:
            return action.payload.chat.messages
        case socketsTypes.RECEIVE_MESSAGE:
            return [...state, action.payload.message]
        default:
            return state
    }
}

