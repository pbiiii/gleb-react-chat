import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import { ChatMessage } from "./ChatMessage";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
    messagesWrapper: {
        height: '100%',
        width: '100%',
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: '120px',
    },
});

class ChatMessageListComponent extends React.Component {
    render() {
        const activeUser = {
            id: 1,
        }
        const messages = [
            {
                id: 1,
                title: 'message 1',
                user_id: 1,
            },
            {
                id: 2,
                title: 'message 2',
                user_id: 2
            }
        ]
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
                                message={message}
                                activeUser={activeUser}
                                sender={message.sender}
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