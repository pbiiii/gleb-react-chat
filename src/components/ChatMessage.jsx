import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core/styles/index";
import Paper from "@material-ui/core/Paper";
import classNames from 'classnames'

const styles = theme => ({
    messageWrapper: {
        display: 'flex',
    },
    messageWrapperFromMe: {
        justifyContent: 'flex-end',
    },
    message: {
        minWidth: '10%',
        maxWidth: '70%',
        padding: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 2,
    },
    messageFromMe: {

    }
});

const ChatMessageComponent = ({classes, message, activeUser}) => {
    const messageFromMe = message.user_id === activeUser.id
    return (
        <div
            className={classNames(classes.messageWrapper, messageFromMe && classes.messageWrapperFromMe)}
        >
            <Avatar>{}</Avatar>
            <Paper
                button

            >

            </Paper>

        </div>
    );
}

export const ChatMessage = withStyles(styles)(ChatMessageComponent);