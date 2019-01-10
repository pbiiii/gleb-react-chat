import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';
import { Typography } from '@material-ui/core/es/index';
import AppTopBar from './AppTopBar';
import ChatDrawer from './ChatDrawer';
import ChatMessageList from './ChatMessageList';
import ChatMessageInput from './ChatMessageInput/ChatMessageInput';
import ErrorMessage from './ErrorMessage';
import ActiveUserType from '../types/ActiveUserType';
import MessageType from '../types/MessageType';
import ChatType from '../types/ChatType';

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
        alignItems: 'center',
    },
});

class ChatPage extends React.Component {
    static propTypes = {
        classes: PropTypes.objectOf(PropTypes.string).isRequired,
        match: PropTypes.shape({
            params: PropTypes.object.isRequired,
        }).isRequired,
        chats: PropTypes.shape({
            active: PropTypes.shape(ChatType),
            my: PropTypes.arrayOf(PropTypes.shape(ChatType)).isRequired,
            all: PropTypes.arrayOf(PropTypes.shape(ChatType)).isRequired,
        }).isRequired,
        activeUser: PropTypes.shape(ActiveUserType).isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape(MessageType)).isRequired,
        error: PropTypes.instanceOf(Error),
        isConnected: PropTypes.bool.isRequired,
        socketsConnect: PropTypes.func.isRequired,
        fetchAllChats: PropTypes.func.isRequired,
        fetchMyChats: PropTypes.func.isRequired,
        setActiveChat: PropTypes.func.isRequired,
        mountChat: PropTypes.func.isRequired,
        unMountChat: PropTypes.func.isRequired,
        createChat: PropTypes.func.isRequired,
        joinChat: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
        leaveChat: PropTypes.func.isRequired,
        sendMessage: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired,
        editUser: PropTypes.func.isRequired,
    };

    static defaultProps = {
        error: null,
    };

    componentDidMount() {
        const {
            fetchAllChats,
            fetchMyChats,
            match,
            socketsConnect,
            setActiveChat,
            mountChat,
        } = this.props;
        Promise.all([fetchAllChats(), fetchMyChats()])
            .then(() => {
                socketsConnect();
            })
            .then(() => {
                const { chatId } = match.params;
                if (chatId) {
                    setActiveChat(chatId);
                    mountChat(chatId);
                }
            });
    }

    componentWillReceiveProps(nextProps) {
        const {
            match: { params },
            setActiveChat,
            mountChat,
            unMountChat,
        } = this.props;
        const { params: nextParams } = nextProps.match;

        if (nextParams.chatId && params.chatId !== nextParams.chatId) {
            setActiveChat(nextParams.chatId);
            unMountChat(params.chatId);
            mountChat(nextParams.chatId);
        }
    }

    render() {
        const {
            classes,
            error,
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
            isConnected,
        } = this.props;
        const activeChat = chats.active;
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
                    isConnected={isConnected}
                />
                <ChatDrawer
                    allChats={chats.all}
                    myChats={chats.my}
                    activeChat={activeChat}
                    onCreateChat={createChat}
                    isConnected={isConnected}
                />
                <main className={classNames(classes.content, !activeChat && classes.noActiveChat)}>
                    {activeChat && (
                        <React.Fragment>
                            <ChatMessageList messages={messages} activeUser={activeUser} />
                            <ChatMessageInput
                                sendMessage={sendMessage}
                                joinChat={() => joinChat({ chat: activeChat })}
                                activeUser={activeUser}
                                disabled={!isConnected}
                            />
                        </React.Fragment>
                    )}
                    {!activeChat && (
                        <Typography variant="h5">Please select or create chat</Typography>
                    )}
                </main>
                <ErrorMessage error={error} />
            </div>
        );
    }
}

export default withStyles(styles)(ChatPage);
