import { combineReducers } from 'redux';
import * as authTypes from 'src/store/auth/actions/actionTypes';
import * as chatsTypes from 'src/store/chats/actions/actionTypes';
import * as socketsTypes from 'src/store/sockets/actions/actionTypes';

const initialState = {
    isFetching: {
        register: false,
        login: false,
        logout: false,
        getUser: false,
        editUser: false,
        allChats: false,
        myChats: false,
        chat: false,
        createChat: false,
        joinChat: false,
        leaveChat: false,
        deleteChat: false,
        sockets: false,
    },
    errors: {
        auth: null,
        chats: null,
    },
    isConnected: false,
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case authTypes.REGISTER_REQUESTED:
            return { ...state, register: true };
        case authTypes.LOGIN_REQUESTED:
            return { ...state, login: true };
        case authTypes.LOGOUT_REQUESTED:
            return { ...state, logout: true };
        case authTypes.GET_USER_REQUESTED:
            return { ...state, getUser: true };
        case authTypes.EDIT_USER_REQUESTED:
            return { ...state, editUser: true };
        case chatsTypes.FETCH_ALL_CHATS_REQUESTED:
            return { ...state, allChats: true };
        case chatsTypes.FETCH_MY_CHATS_REQUESTED:
            return { ...state, myChats: true };
        case chatsTypes.FETCH_CHAT_REQUESTED:
            return { ...state, chat: true };
        case chatsTypes.CREATE_CHAT_REQUESTED:
            return { ...state, createChat: true };
        case chatsTypes.JOIN_CHAT_REQUESTED:
            return { ...state, joinChat: true };
        case chatsTypes.LEAVE_CHAT_REQUESTED:
            return { ...state, leaveChat: true };
        case chatsTypes.DELETE_CHAT_REQUESTED:
            return { ...state, deleteChat: true };
        case socketsTypes.SOCKETS_CONNECTION_REQUEST:
            return { ...state, sockets: true };

        case authTypes.REGISTER_SUCCESS:
        case authTypes.REGISTER_FAILED:
            return { ...state, register: false };
        case authTypes.LOGIN_SUCCESS:
        case authTypes.LOGIN_FAILED:
            return { ...state, login: false };
        case authTypes.LOGOUT_SUCCESS:
            return { ...state, logout: false };
        case authTypes.GET_USER_SUCCESS:
        case authTypes.GET_USER_FAILED:
            return { ...state, getUser: false };
        case authTypes.EDIT_USER_SUCCESS:
        case authTypes.EDIT_USER_FAILED:
            return { ...state, editUser: false };
        case chatsTypes.FETCH_ALL_CHATS_SUCCESS:
        case chatsTypes.FETCH_ALL_CHATS_FAILED:
            return { ...state, allChats: false };
        case chatsTypes.FETCH_MY_CHATS_SUCCESS:
        case chatsTypes.FETCH_MY_CHATS_FAILED:
            return { ...state, myChats: false };
        case chatsTypes.FETCH_CHAT_SUCCESS:
        case chatsTypes.FETCH_CHAT_FAILED:
            return { ...state, chat: false };
        case chatsTypes.CREATE_CHAT_SUCCESS:
        case chatsTypes.CREATE_CHAT_FAILED:
            return { ...state, createChat: false };
        case chatsTypes.JOIN_CHAT_SUCCESS:
        case chatsTypes.JOIN_CHAT_FAILED:
            return { ...state, joinChat: false };
        case chatsTypes.LEAVE_CHAT_SUCCESS:
        case chatsTypes.LEAVE_CHAT_FAILED:
            return { ...state, leaveChat: false };
        case chatsTypes.DELETE_CHAT_SUCCESS:
        case chatsTypes.DELETE_CHAT_FAILED:
            return { ...state, deleteChat: false };
        case socketsTypes.SOCKETS_CONNECTION_SUCCESS:
        case socketsTypes.SOCKETS_CONNECTION_FAILED:
            return { ...state, sockets: false };

        default:
            return state;
    }
};

const errors = (state = initialState.errors, action) => {
    switch (action.type) {
        case authTypes.REGISTER_FAILED:
        case authTypes.LOGIN_FAILED:
        case authTypes.LOGOUT_FAILED:
            return { ...state, auth: action.payload };
        case authTypes.REGISTER_SUCCESS:
        case authTypes.LOGIN_SUCCESS:
        case authTypes.LOGOUT_SUCCESS:
            return { ...state, auth: null };

        case authTypes.EDIT_USER_FAILED:
        case chatsTypes.FETCH_ALL_CHATS_FAILED:
        case chatsTypes.FETCH_MY_CHATS_FAILED:
        case chatsTypes.FETCH_CHAT_FAILED:
        case chatsTypes.CREATE_CHAT_FAILED:
        case chatsTypes.JOIN_CHAT_FAILED:
        case chatsTypes.LEAVE_CHAT_FAILED:
        case chatsTypes.DELETE_CHAT_FAILED:
        case socketsTypes.SOCKETS_CONNECTION_FAILED:
        case socketsTypes.SOCKETS_CONNECTION_MISSING:
            return { ...state, chats: action.payload };
        case authTypes.EDIT_USER_SUCCESS:
        case chatsTypes.FETCH_ALL_CHATS_SUCCESS:
        case chatsTypes.FETCH_MY_CHATS_SUCCESS:
        case chatsTypes.FETCH_CHAT_SUCCESS:
        case chatsTypes.CREATE_CHAT_SUCCESS:
        case chatsTypes.JOIN_CHAT_SUCCESS:
        case chatsTypes.LEAVE_CHAT_SUCCESS:
        case chatsTypes.DELETE_CHAT_SUCCESS:
        case socketsTypes.SOCKETS_CONNECTION_SUCCESS:
        case socketsTypes.SOCKETS_CONNECTION_REQUEST:
            return { ...state, chats: null };

        default:
            return state;
    }
};

const isConnected = (state = initialState.isConnected, action) => {
    switch (action.type) {
        case socketsTypes.SOCKETS_CONNECTION_MISSING:
        case socketsTypes.SOCKETS_CONNECTION_FAILED:
            return false;
        case socketsTypes.SOCKETS_CONNECTION_SUCCESS:
            return true;
        default:
            return state;
    }
};

// eslint-disable-next-line
export const services = combineReducers({
    isFetching,
    errors,
    isConnected,
});
