import * as types from './actionTypes'
import { client } from '@src/core/api'
import { redirect } from "@src/store/services/actions";

export const fetchAllChats = () => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_ALL_CHATS_REQUESTED,
        });
        client.get('/chats')
            .then(({data}) => {
                dispatch({
                    type: types.FETCH_ALL_CHATS_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: types.FETCH_ALL_CHATS_FAILED,
                });
            })

    };
}

export const fetchMyChats = () => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_MY_CHATS_REQUESTED,
        });
        client.get('/chats/my')
            .then(({data}) => {
                dispatch({
                    type: types.FETCH_MY_CHATS_SUCCESS,
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: types.FETCH_MY_CHATS_FAILED,
                });
            })
    }
}

export const fetchChat = (chatId) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_CHAT_REQUESTED,
        });
        client.get(`/chats/${chatId}`)
            .then(({data}) => {
                dispatch({
                    type: types.FETCH_CHAT_SUCCESS,
                    payload: data
                });
                return data
            })
            .catch((error) => {
                dispatch({
                    type: types.FETCH_CHAT_FAILED,
                });
            })
    }
}

export const setActiveChat = (chatId) => {
    return (dispatch) => {
        return dispatch(setActiveChat(chatId))
            .then(data => {
                if(!data) {
                    dispatch(redirect('/chat'));
                    return dispatch({
                        type: types.UNSET_ACTIVE_CHAT,
                    })
                }
                dispatch({
                    type: types.SET_ACTIVE_CHAT,
                    payload: data,
                });
            })

    }
}

export const unsetActiveChat = (chatId) => {
    return (dispatch) => {
        return dispatch(setActiveChat(chatId))
            .then(data => {
                if(!data) {
                    return dispatch(redirect('/chat'));
                } else {
                    dispatch({
                        type: types.SET_ACTIVE_CHAT,
                        payload: data,
                    });
                }
            })

    }
}