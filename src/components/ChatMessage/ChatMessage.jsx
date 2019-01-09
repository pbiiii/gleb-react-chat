import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import './ChatMessage.scss';
import { getUserId } from 'src/store/reducer';

const ChatMessage = ({
    sender, activeUser, content, statusMessage, createdAt,
}) => {
    const { username } = sender;
    const messageFromMe = getUserId(sender) === getUserId(activeUser);
    const avatarTitle = username.substring(0, 2).toUpperCase();
    if (statusMessage) {
        return (
            <div className={classNames('status-message-wrapper')}>
                <Typography className="message">
                    <Typography variant="caption">
                        {username}
                    </Typography>
                    <Typography variant="body1">
                        {content}
                    </Typography>
                    <Typography variant="caption">
                        {moment(createdAt).fromNow()}
                    </Typography>
                </Typography>
            </div>
        );
    }
    return (
        <div className={classNames('message-wrapper', messageFromMe && 'from-me')}>
            <Avatar>{avatarTitle}</Avatar>
            <Paper button="true" className="message">
                <Typography variant="caption">
                    {username}
                </Typography>
                <Typography variant="body1">
                    {content}
                </Typography>
                <Typography variant="caption">
                    {moment(createdAt).fromNow()}
                </Typography>
            </Paper>
        </div>
    );
};

export default ChatMessage;
