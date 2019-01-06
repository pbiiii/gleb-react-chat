import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames'
import {
    ChatDrawer,
    AppTopBar,
    ChatMessageList,
    ChatMessageInput
} from '@src/components'
import {Typography} from '@material-ui/core/es/index';

const styles = theme => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '64px',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
    },
    noActiveChat: {
        alignItems: 'center'
    }
});

class ChatPageComponent extends React.Component {

    componentDidMount() {
        const {
            fetchAllChats,
            fetchMyChats,
            match,
            setActiveChat,
        } = this.props
        Promise.all([
            fetchAllChats(),
            fetchMyChats(),
        ]).then(() => {
            const { chatId } = match.params
            if (chatId) {
                setActiveChat(chatId);
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        const { match: { params }, setActiveChat } = this.props;
        const { params: nextParams } = nextProps.match;

        if (nextParams.chatId && (params.chatId !== nextParams.chatId)) {
            setActiveChat(nextParams.chatId);
        }
    }

    render() {
        const {
            classes,
            logout,
            activeUser,
            editUser,
            chats,
            createChat,
            deleteChat,
            leaveChat,
            joinChat,
            messages,
            sendMessage,
        } = this.props;
        const activeChat = chats.active
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppTopBar
                    logout={logout}
                    activeUser={activeUser}
                    editUser={editUser}
                    activeChat={activeChat}
                    leaveChat={leaveChat}
                    deleteChat={deleteChat}
                />
                <ChatDrawer
                    allChats={chats.all}
                    myChats={chats.my}
                    activeChat={activeChat}
                    onCreateChat={createChat}
                />
                <main
                    className={classNames(classes.content, !activeChat && classes.noActiveChat)}
                >
                    {activeChat && (
                        <React.Fragment>
                            <ChatMessageList
                                messages={messages}
                                activeUser={activeUser}
                            />
                            <ChatMessageInput
                                sendMessage={(content) => sendMessage({chat: activeChat, content})}
                                joinChat={() => joinChat({chat: activeChat})}
                                activeUser={activeUser}
                            />
                        </React.Fragment>
                    )}
                    {!activeChat && (
                        <Typography variant={'h5'}>
                            Please select or create chat
                        </Typography>
                    )}
                </main>
            </div>
        );
    }
}

export const ChatPage = withStyles(styles)(ChatPageComponent);