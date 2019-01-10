import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles/index';
import { Typography } from '@material-ui/core';
import ChatItem from './ChatItem';
import ChatType from '../types/ChatType';

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
    <List className={classes.list}>
        {chats && chats.length > 0 ? (
            chats.map(chat => (
                <ChatItem
                    disabled={disabled}
                    chat={chat}
                    key={chat._id}
                    active={Boolean(activeChat && activeChat._id === chat._id)}
                />
            ))
        ) : (
            <Typography variant="body1" className={classes.subtitle}>
                There is no chats yet...
            </Typography>
        )}
    </List>
);

ChatsList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    activeChat: PropTypes.shape(ChatType),
    chats: PropTypes.arrayOf(PropTypes.shape(ChatType)).isRequired,
    disabled: PropTypes.bool.isRequired,
};

ChatsList.defaultProps = {
    activeChat: null,
};

export default withStyles(styles)(ChatsList);
