import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const ChatsItemComponent = ({chat}) => {
    return (
        <ListItem
            button
        >
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary={chat.title}/>
        </ListItem>
    );
}

export const ChatItem = ChatsItemComponent;