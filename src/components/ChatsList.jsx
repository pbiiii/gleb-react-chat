import React from 'react';
import List from '@material-ui/core/List';
import { ChatItem } from './ChatItem'
import { withStyles } from "@material-ui/core/styles/index";
import { Typography } from "@material-ui/core";

const styles = theme => ({
    subtitle: {
        textAlign: 'center'
    },
    list: {
        height: '100%',
        overflowY: 'scroll',
    },
});

const ChatsListComponent = ({chats, classes, activeChat}) => {

    return (
        <List
            className={classes.list}
        >
            {chats.length > 0 ? chats.map(chat => (
                <ChatItem
                    chat={chat}
                    key={chat._id}
                    active={activeChat && (activeChat.id === chat.id)}
                />
            )) :
                <Typography
                    variant="body1"
                    className={classes.subtitle}
                >
                    There is no chats yet...
                </Typography>
            }
        </List>
    );
}

export const ChatsList = withStyles(styles)(ChatsListComponent);