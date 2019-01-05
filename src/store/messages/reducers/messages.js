import * as types from '@src/store/chats/actions/actionTypes'

const initialState = []

export const messages = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CHAT_SUCCESS:
            return action.payload.chat.messages
        case types.SEND_MESSAGE_SUCCESS:
            return [...state, action.payload.message]
        default:
            return state
    }
}

