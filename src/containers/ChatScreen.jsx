import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    mountChat, unMountChat, sendMessage, socketsConnect,
} from 'src/store/sockets/actions';
import {
    fetchAllChats,
    fetchMyChats,
    setActiveChat,
    createChat,
    deleteChat,
    joinChat,
    leaveChat,
} from 'src/store/chats/actions';
import { logout, editUser } from 'src/store/auth/actions';
import * as fromChats from 'src/store/chats/reducers/chats';
import * as fromState from 'src/store/reducer';
import ChatPage from '../components/ChatPage';

const mapStateToProps = (state) => {
    const { messages, chats } = state;
    const activeChat = fromChats.getById(chats, chats.activeChatId);
    return {
        isAuthenticated: state.user.isAuthenticated,
        chats: {
            active: activeChat,
            all: fromChats.getByIds(chats, chats.allIds),
            my: fromChats.getByIds(chats, chats.myIds),
        },
        activeUser: {
            ...state.user.info,
            isMember: fromState.isMember(state, activeChat),
            isCreator: fromState.isCreator(state, activeChat),
            isChatMember: fromState.isChatMember(state, activeChat),
        },
        messages,
        error: state.services.errors.chats,
        isConnected: state.services.isConnected,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        socketsConnect,
        fetchAllChats,
        fetchMyChats,
        setActiveChat,
        mountChat,
        unMountChat,
        createChat,
        joinChat,
        deleteChat,
        leaveChat,
        sendMessage,
        logout,
        editUser,
    },
    dispatch,
);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChatPage);
