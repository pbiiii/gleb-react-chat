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
            .catch((error) => dispatch({
                type: types.FETCH_ALL_CHATS_FAILED,
                payload: error
            }))

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
            .catch((error) => dispatch({
                type: types.FETCH_MY_CHATS_FAILED,
                payload: error
            }))
    }
}

export const fetchChat = (chatId) => {
    return (dispatch) => {
        dispatch({
            type: types.FETCH_CHAT_REQUESTED,
        });
        return client.get(`/chats/${chatId}`)
            .then(({data}) => {
                dispatch({
                    type: types.FETCH_CHAT_SUCCESS,
                    payload: data
                });
                return data
            })
            .catch((error) => dispatch({
                type: types.FETCH_CHAT_FAILED,
                payload: error
            }))
    }
}

export const setActiveChat = (chatId) => {
    return dispatch => dispatch(fetchChat(chatId)).then(({chat}) => {
        if (!chat) {
            dispatch(redirect('/chat'));
            return dispatch({
                type: types.UNSET_ACTIVE_CHAT,
            });
        }
        dispatch({
            type: types.SET_ACTIVE_CHAT,
            payload: { chat },
        });
        return dispatch(redirect(`/chat/${chat._id}`));
    });
}

export const createChat = (title) => {
    return (dispatch) => {
        dispatch({
            type: types.CREATE_CHAT_REQUESTED,
            payload: title
        });
        client.post('/chats', { data: { title } })
            .then(({ data : { chat }}) => {
                dispatch({
                    type: types.CREATE_CHAT_SUCCESS,
                    payload: { chat }
                })
                dispatch(redirect(`/chat/${chat._id}`))
                return chat
            })
            .catch((error) => dispatch({
                type: types.CREATE_CHAT_FAILED,
                payload: error
            }))
    }
}

export const joinChat = ({chat}) => {
    return (dispatch) => {
        dispatch({
            type: types.JOIN_CHAT_REQUESTED,
            payload: chat
        });
        client.get(`/chats/${chat._id}/join`)
            .then(({data}) => {
                const { chat } = data
                dispatch({
                    type: types.JOIN_CHAT_SUCCESS,
                    payload: { chat }
                })
                dispatch(redirect(`/chat/${chat._id}`))
                return chat
            })
            .catch((error) => dispatch({
                type: types.JOIN_CHAT_FAILED,
                payload: error
            }))
    }
}

export const sendMessage = ({chat, content}) => {
    return (dispatch) => {
        dispatch({
            type: types.SEND_MESSAGE_REQUESTED,
            payload: { chat, content }
        });
        client.post(`/chats/${chat._id}`, {
            data: {
                content
            }
        }).then(({ data }) => {
            const { message } = data
            dispatch({
                type: types.SEND_MESSAGE_SUCCESS,
                payload: { message }
            })
        }).catch((error) => dispatch({
            type: types.SEND_MESSAGE_FAILED,
            payload: error
        }))
    }
}

export const leaveChat = ({chat}) => {
    return (dispatch) => {
        dispatch({
            type: types.LEAVE_CHAT_REQUESTED,
            payload: {chat}
        });
        client.get(`/chats/${chat._id}/leave`).then(() => {
            dispatch({
                type: types.LEAVE_CHAT_SUCCESS,
                payload: {chat}
            })
            dispatch(setActiveChat(null))
        }).catch((error) => dispatch({
            type: types.LEAVE_CHAT_FAILED,
            payload: error
        }))
    }
}

export const deleteChat = ({chat}) => {
    return (dispatch) => {
        dispatch({
            type: types.DELETE_CHAT_REQUESTED,
            payload: {chat}
        });
        client.delete(`/chats/${chat._id}`).then(() => {
            dispatch({
                type: types.DELETE_CHAT_SUCCESS,
                payload: {chat}
            })
        }).catch((error) => dispatch({
            type: types.DELETE_CHAT_FAILED,
            payload: error
        }))
    }
}