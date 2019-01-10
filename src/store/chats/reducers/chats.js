/* eslint no-use-before-define: 0 */
import { combineReducers } from 'redux';
import * as authTypes from 'src/store/auth/actions/actionTypes';
import * as socketsTypes from 'src/store/sockets/actions/actionTypes';
import * as types from '../actions/actionTypes';

const initialState = {
    activeChatId: null,
    allIds: [],
    myIds: [],
    byIds: {},
};

const activeChatId = (state = initialState.activeChatId, action) => {
    switch (action.type) {
        case types.SET_ACTIVE_CHAT:
        case types.JOIN_CHAT_SUCCESS:
            return getChatId(action.payload.chat);
        case types.UNSET_ACTIVE_CHAT:
        case authTypes.LOGOUT_SUCCESS:
            return null;
        case socketsTypes.RECEIVE_DELETED_CHAT:
            return state === getChatId(action.payload.chat) ? null : state;
        default:
            return state;
    }
};

const allIds = (state = initialState.allIds, action) => {
    switch (action.type) {
        case types.FETCH_ALL_CHATS_SUCCESS:
            return action.payload.chats.map(getChatId);
        case types.CREATE_CHAT_SUCCESS:
        case socketsTypes.RECEIVE_NEW_CHAT:
            return [...state, getChatId(action.payload.chat)];
        case types.DELETE_CHAT_SUCCESS:
        case socketsTypes.RECEIVE_DELETED_CHAT:
            return state.filter(chatId => chatId !== getChatId(action.payload.chat));
        default:
            return state;
    }
};

const myIds = (state = initialState.myIds, action) => {
    switch (action.type) {
        case types.FETCH_MY_CHATS_SUCCESS:
            return action.payload.chats.map(getChatId);
        case types.CREATE_CHAT_SUCCESS:
        case types.JOIN_CHAT_SUCCESS:
            return [...state, getChatId(action.payload.chat)];
        case types.LEAVE_CHAT_SUCCESS:
        case types.DELETE_CHAT_SUCCESS:
        case socketsTypes.RECEIVE_DELETED_CHAT:
            return state.filter(chatId => chatId !== getChatId(action.payload.chat));
        default:
            return state;
    }
};

const byIds = (state = initialState.byIds, action) => {
    switch (action.type) {
        case types.FETCH_ALL_CHATS_SUCCESS:
        case types.FETCH_MY_CHATS_SUCCESS:
            return {
                ...state,
                ...action.payload.chats.reduce(
                    (ids, chat) => ({
                        ...ids,
                        [getChatId(chat)]: chat,
                    }),
                    {},
                ),
            };
        case types.JOIN_CHAT_SUCCESS:
        case types.LEAVE_CHAT_SUCCESS:
        case types.CREATE_CHAT_SUCCESS:
        case socketsTypes.RECEIVE_NEW_CHAT: {
            const { chat } = action.payload;
            return {
                ...state,
                [getChatId(chat)]: chat,
            };
        }
        case types.DELETE_CHAT_SUCCESS:
        case socketsTypes.RECEIVE_DELETED_CHAT: {
            const newState = { ...state };
            delete newState[getChatId(action.payload.chat)];
            return newState;
        }
        default:
            return state;
    }
};

export const chats = combineReducers({
    activeChatId,
    allIds,
    myIds,
    byIds,
});

export const getChatId = chat => chat._id;
export const getById = (state, id) => state.byIds[id];
export const getByIds = (state, ids) => ids.map(id => state.byIds[id]);
