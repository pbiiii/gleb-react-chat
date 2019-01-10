import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import ChatMessage from './ChatMessage/ChatMessage';
import ActiveUserType from '../types/ActiveUserType';
import MessageType from '../types/MessageType';

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

ChatMessageList.propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    activeUser: PropTypes.shape(ActiveUserType).isRequired,
    messages: PropTypes.arrayOf(PropTypes.shape(MessageType)).isRequired,
};

export default withStyles(styles)(ChatMessageList);
