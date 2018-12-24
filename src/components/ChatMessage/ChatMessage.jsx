import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import classNames from 'classnames'
import Typography from "@material-ui/core/Typography";
import moment from 'moment';
import './ChatMessage.scss'

export const ChatMessage = ({sender, activeUser, id, content, createdAt}) => {
    const messageFromMe = sender === 'me',
        avatarTitle = sender.substring(0, 2).toUpperCase()
    return (
        <div
            className={classNames('message-wrapper', messageFromMe && 'from-me')}
        >
            <Avatar>{avatarTitle}</Avatar>
            <Paper
                button
                className={'message'}
            >
                <Typography
                    variant={'caption'}
                >
                    {sender}
                </Typography>
                <Typography
                    variant={'body1'}
                >
                    {content}
                </Typography>
                <Typography
                    variant={'caption'}
                >
                    {moment(createdAt).fromNow()}
                </Typography>
            </Paper>
        </div>
    );
}
