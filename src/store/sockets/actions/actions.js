import SocketIOClient from 'socket.io-client'
import * as types from './actionTypes'
import { redirect } from "@src/store/services/actions";
import { getChatId } from "@src/store/chats/reducers/chats";

let socket = null;

export const socketConnectionMissing = () => {
    return {
        type: types.SOCKETS_CONNECTION_MISSING
    }
}

export const socketsConnect = () => {
    return (dispatch, getState) => {
        const { token } = getState().auth.user
        dispatch({
            type: types.SOCKETS_CONNECTION_REQUEST,

        })
        socket = SocketIOClient('ws://localhost:9000', {
            query: { token }
        })

        socket.on('connect', () => {
            dispatch({
                type: types.SOCKETS_CONNECTION_SUCCESS,
            })
        })

        socket.on('error', () => {
            dispatch({
                type: types.SOCKETS_CONNECTION_FAILED,
            })
        })

        socket.on('connect_error', () => {
            dispatch({
                type: types.SOCKETS_CONNECTION_FAILED,
            })
        })

        socket.on('new-message', ({ message }) => {
            dispatch({
                type: types.RECEIVE_MESSAGE,
                payload: { message }
            })
        })

        socket.on('new-chat', ({ chat }) => {
            dispatch({
                type: types.RECEIVE_NEW_CHAT,
                payload: { chat }
            })
        })

        socket.on('deleted-chat', ({ chat }) => {
            const { activeChatId } = getState().chats
            dispatch({
                type: types.RECEIVE_DELETED_CHAT,
                payload: { chat }
            })
            if (activeChatId === getChatId(chat)) {
                dispatch(redirect('/chat'))
            }
        })
    }
}

export const sendMessage = (content) => {
    return (dispatch, getState) => {
        const { activeChatId } = getState().chats
        if(!socket) {
            dispatch(socketConnectionMissing())
        }
        socket.emit('send-message', {
            chatId: activeChatId,
            content,
        }, () => {
            dispatch({
                type: types.SEND_MESSAGE,
                payload: {
                    chatId: activeChatId,
                    content,
                }
            })
        })
    }
}

export const mountChat = (chatId) => {
    return (dispatch, getState) => {
        if(!socket) {
            dispatch(socketConnectionMissing())
        }
        socket.emit('mount-chat', chatId)
        dispatch({
            type: types.MOUNT_CHAT,
            payload: chatId
        })
    }
}

export const unMountChat = (chatId) => {
    return (dispatch, getState) => {
        if(!socket) {
            dispatch(socketConnectionMissing())
        }
        socket.emit('unmount-chat', chatId)
        dispatch({
            type: types.UN_MOUNT_CHAT,
            payload: chatId
        })
    }
}