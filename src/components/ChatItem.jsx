import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ChatItem = ({ chat, active }) => {
    const {
        _id: chatId,
        title,
        createdAt,
    } = chat;
    const avatarTitle = title.substring(0, 2).toUpperCase();
    return (
        <ListItem
            button
            component={Link}
            to={`/chat/${chatId}`}
            selected={active}
        >
            <Avatar>{avatarTitle}</Avatar>
            <ListItemText primary={title} secondary={moment(createdAt).fromNow()} />
        </ListItem>
    );
};

export default ChatItem;
