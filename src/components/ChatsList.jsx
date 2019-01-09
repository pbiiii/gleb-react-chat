import React from 'react';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles/index';
import { Typography } from '@material-ui/core';
import ChatItem from './ChatItem';

const styles = () => ({
    subtitle: {
        textAlign: 'center',
    },
    list: {
        height: '100%',
        overflowY: 'scroll',
    },
});

const ChatsList = ({
    chats, classes, activeChat, disabled,
}) => (
    <List
        className={classes.list}
    >
        {chats && chats.length > 0 ? (
            chats.map(chat => (
                <ChatItem
                    disabled={disabled}
                    chat={chat}
                    key={chat._id}
                    active={activeChat && (activeChat._id === chat._id)}
                />
            ))
        ) : (
            <Typography
                variant="body1"
                className={classes.subtitle}
            >
                There is no chats yet...
            </Typography>
        )}
    </List>
);

export default withStyles(styles)(ChatsList);
