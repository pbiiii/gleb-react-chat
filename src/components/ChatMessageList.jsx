import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { ChatMessage } from "./ChatMessage/ChatMessage";
import Typography from "@material-ui/core/Typography";
import mocks from '@src/mocks'


const styles = theme => ({
    messagesWrapper: {
        height: '100%',
        width: '100%',
        overflowX: 'hidden',
        overflowY: 'scroll',
        paddingBottom: theme.spacing.unit * 14
    },
});

class ChatMessageListComponent extends React.Component {
    render() {
        const activeUser = {
            id: 1,
            name: 'user1'
        }
        const { messages } = mocks
        const {
            classes,
            // messages,
            // activeUser
        } = this.props
        return (
            <div
                className={classes.messagesWrapper}
            >
                {
                    messages.length
                        ? messages.map(message =>
                            <ChatMessage
                                key={message.id}
                                activeUser={activeUser}
                                {...message}
                            />
                        )
                        : <Typography
                            variant={'h3'}
                        >
                            There is no messages yet
                        </Typography>
                }
            </div>
        )
    }
}

export const ChatMessageList = withStyles(styles)(ChatMessageListComponent);