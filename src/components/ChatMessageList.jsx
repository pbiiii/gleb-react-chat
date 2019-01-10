import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ChatMessage from './ChatMessage/ChatMessage';

const styles = theme => ({
    messagesWrapper: {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        paddingBottom: theme.spacing.unit * 14,
    },
    noMessages: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const ChatMessageList = ({ classes, messages, activeUser }) => {
    const messagesExists = messages && messages.length > 0;
    return (
        <div className={classNames(classes.messagesWrapper, !messagesExists && classes.noMessages)}>
            {messagesExists ? (
                messages.map(message => (
                    <ChatMessage key={message._id} activeUser={activeUser} {...message} />
                ))
            ) : (
                <Typography variant="h5">There is no messages yet</Typography>
            )}
        </div>
    );
};

export default withStyles(styles)(ChatMessageList);
