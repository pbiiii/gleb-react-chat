import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import classNames from 'classnames'
import { ChatMessage } from "./ChatMessage/ChatMessage";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    messagesWrapper: {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        paddingBottom: theme.spacing.unit * 14
    },
    noMessages: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class ChatMessageListComponent extends React.Component {
    render() {
        const {
            classes,
            messages,
            activeUser
        } = this.props
        const messagesExists = messages && messages.length > 0
        return (
            <div
                className={classNames(classes.messagesWrapper, !messagesExists && classes.noMessages)}
            >
                {
                    messagesExists ? (
                        messages.map((message, index) =>
                            <ChatMessage
                                key={message._id || index}
                                activeUser={activeUser}
                                {...message}
                            />)
                    ) : (
                        <Typography variant={'h5'}>
                            There is no messages yet
                        </Typography>
                    )
                }
            </div>
        )
    }
}

export const ChatMessageList = withStyles(styles)(ChatMessageListComponent);