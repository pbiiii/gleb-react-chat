import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ChatPage } from "@src/components/index";
import { fetchAllChats, fetchMyChats, setActiveChat } from "@src/store/chats/actions";
import { logout } from "@src/store/auth/actions";
import * as fromChats from '@src/store/chats/reducers/chats'

const mapStateToProps = state => ({
    allChats: fromChats.getByIds(state, state.chats.allIds),
    myChats: fromChats.getByIds(state, state.chats.myIds)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAllChats,
    fetchMyChats,
    setActiveChat,
    logout,
}, dispatch);

export const ChatScreen = connect(mapStateToProps, mapDispatchToProps)(ChatPage);