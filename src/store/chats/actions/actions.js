import client from 'src/core/api';
import { redirect } from 'src/store/services/actions';
import * as types from './actionTypes';

export const fetchAllChats = () => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.allChats) {
        return Promise.resolve();
    }
    dispatch({ type: types.FETCH_ALL_CHATS_REQUESTED });
    return client
        .get('/chats')
        .then(({ data }) => dispatch({
            type: types.FETCH_ALL_CHATS_SUCCESS,
            payload: data,
        }))
        .catch(error => dispatch({
            type: types.FETCH_ALL_CHATS_FAILED,
            payload: error,
        }));
};

export const fetchMyChats = () => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.myChats) {
        return Promise.resolve();
    }
    dispatch({ type: types.FETCH_MY_CHATS_REQUESTED });
    return client
        .get('/chats/my')
        .then(({ data }) => dispatch({
            type: types.FETCH_MY_CHATS_SUCCESS,
            payload: data,
        }))
        .catch(error => dispatch({
            type: types.FETCH_MY_CHATS_FAILED,
            payload: error,
        }));
};

export const fetchChat = chatId => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.chat) {
        return Promise.resolve();
    }
    dispatch({ type: types.FETCH_CHAT_REQUESTED });
    return client
        .get(`/chats/${chatId}`)
        .then(({ data }) => {
            dispatch({
                type: types.FETCH_CHAT_SUCCESS,
                payload: data,
            });
            return data;
        })
        .catch(error => dispatch({
            type: types.FETCH_CHAT_FAILED,
            payload: error,
        }));
};

export const setActiveChat = chatId => dispatch => dispatch(fetchChat(chatId)).then((data) => {
    if (!data) {
        dispatch(redirect('/chat'));
        return dispatch({
            type: types.UNSET_ACTIVE_CHAT,
        });
    }
    const { chat } = data;
    dispatch({
        type: types.SET_ACTIVE_CHAT,
        payload: { chat },
    });
    return dispatch(redirect(`/chat/${chat._id}`));
});

export const createChat = title => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.createChat) {
        return Promise.resolve();
    }
    dispatch({
        type: types.CREATE_CHAT_REQUESTED,
        payload: title,
    });
    return client
        .post('/chats', {
            data: { title },
        })
        .then(({ data: { chat } }) => {
            dispatch({
                type: types.CREATE_CHAT_SUCCESS,
                payload: { chat },
            });
            dispatch(redirect(`/chat/${chat._id}`));
            return chat;
        })
        .catch(error => dispatch({
            type: types.CREATE_CHAT_FAILED,
            payload: error,
        }));
};

export const joinChat = ({ chat }) => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.joinChat) {
        return Promise.resolve();
    }
    dispatch({
        type: types.JOIN_CHAT_REQUESTED,
        payload: chat,
    });
    return client
        .get(`/chats/${chat._id}/join`)
        .then(({ data }) => {
            const { chat: newChat } = data;
            dispatch({
                type: types.JOIN_CHAT_SUCCESS,
                payload: { chat: newChat },
            });
            dispatch(redirect(`/chat/${chat._id}`));
            return newChat;
        })
        .catch(error => dispatch({
            type: types.JOIN_CHAT_FAILED,
            payload: error,
        }));
};

export const leaveChat = ({ chat }) => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.leaveChat) {
        return Promise.resolve();
    }
    dispatch({
        type: types.LEAVE_CHAT_REQUESTED,
        payload: { chat },
    });
    return client
        .get(`/chats/${chat._id}/leave`)
        .then(() => {
            dispatch({
                type: types.LEAVE_CHAT_SUCCESS,
                payload: { chat },
            });
            dispatch(setActiveChat(null));
        })
        .catch(error => dispatch({
            type: types.LEAVE_CHAT_FAILED,
            payload: error,
        }));
};

export const deleteChat = ({ chat }) => (dispatch, getState) => {
    const { isFetching } = getState().services;
    if (isFetching.deleteChat) {
        return Promise.resolve();
    }
    dispatch({
        type: types.DELETE_CHAT_REQUESTED,
        payload: { chat },
    });
    return client
        .delete(`/chats/${chat._id}`)
        .then(() => dispatch({
            type: types.DELETE_CHAT_SUCCESS,
            payload: { chat },
        }))
        .catch(error => dispatch({
            type: types.DELETE_CHAT_FAILED,
            payload: error,
        }));
};
