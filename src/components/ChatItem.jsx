import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core/styles/index";
import { Link } from 'react-router-dom';
import moment from 'moment';

const styles = theme => ({
    activeChat: {
        backgroundColor: theme.palette.grey[200],
    }
});

const ChatItemComponent = ({classes, chat, active}) => {
    const {
        _id: chatId,
        title,
        createdAt
    } = chat
    const avatarTitle = title.substring(0, 2).toUpperCase()
    return (
        <ListItem
            button
            component={Link}
            to={`/chat/${chatId}`}
            selected={active}
            className={active && classes.activeChat}
        >
            <Avatar>{avatarTitle}</Avatar>
            <ListItemText primary={title} secondary={moment(createdAt).fromNow()}/>
        </ListItem>
    );
}

export const ChatItem = withStyles(styles)(ChatItemComponent);