import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ChatType from '../types/ChatType';

const ChatItem = ({ chat, active, disabled }) => {
    const { _id: chatId, title, createdAt } = chat;
    const avatarTitle = title.substring(0, 2).toUpperCase();
    return (
        <ListItem
            button
            component={Link}
            to={`/chat/${chatId}`}
            selected={active}
            disabled={disabled}
        >
            <Avatar>{avatarTitle}</Avatar>
            <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
        </ListItem>
    );
};

ChatItem.propTypes = {
    chat: PropTypes.shape(ChatType).isRequired,
    active: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
};

export default ChatItem;
