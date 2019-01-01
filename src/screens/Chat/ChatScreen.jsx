import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ChatPage } from "@src/components";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch,
    );

export const ChatScreen = connect(mapStateToProps, mapDispatchToProps)(ChatPage);