import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ChatPage } from "@src/components/index";
import { fetchAllChats, fetchMyChats, setActiveChat, createChat } from "@src/store/chats/actions";
import { logout } from "@src/store/auth/actions";
import * as fromChats from '@src/store/chats/reducers/chats'
import * as fromState from '@src/store/reducer'

const mapStateToProps = state => {
    const { messages, chats } = state
    const activeChat = fromChats.getById(chats, chats.activeChatId)
    return {
        isAuthenticated: state.auth.user.isAuthenticated,
        chats: {
            active: activeChat,
            all: fromChats.getByIds(chats, chats.allIds),
            my: fromChats.getByIds(chats, chats.myIds)
        },
        activeUser: {
            ...state.auth.user.info,
            isMember: fromState.isMember(state, activeChat),
            isCreator: fromState.isCreator(state, activeChat),
            isChatMember: fromState.isChatMember(state, activeChat),
        },
        messages,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllChats,
    fetchMyChats,
    setActiveChat,
    logout,
    createChat,
}, dispatch);

export const ChatScreen = connect(mapStateToProps, mapDispatchToProps)(ChatPage);