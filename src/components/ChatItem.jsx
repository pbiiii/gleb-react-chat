import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    activeChat: {
        backgroundColor: theme.palette.grey[200],
    }
});

const ChatsItemComponent = ({classes, chat, active}) => {
    const {
        id: chatId,
        title,
        createdAt
    } = chat
    const avatarTitle = title.substring(0, 2).toUpperCase()
    return (
        <ListItem
            button
            selected={active}
            className={active && classes.activeChat}
        >
            <Avatar>{avatarTitle}</Avatar>
            <ListItemText primary={title}/>
        </ListItem>
    );
}

export const ChatItem = withStyles(styles)(ChatsItemComponent);