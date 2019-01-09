import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/es/Typography/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import UserMenu from './UserMenu';
import ChatMenu from './ChatMenu';

const drawerWidth = 320;

const styles = () => ({
    appBar: {
        position: 'fixed',
        width: 'calc(100% - 320px)',
        marginLeft: drawerWidth,
    },
    appBarTitle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});

const AppTopBar = ({
    classes,
    activeChat,
    isConnected,
    activeUser,
    leaveChat,
    deleteChat,
    logout,
    editUser,
}) => (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appBarTitle}>
            {activeChat ? (
                <ChatMenu
                    disabled={!isConnected}
                    activeUser={activeUser}
                    deleteChat={() => deleteChat({ chat: activeChat })}
                    leaveChat={() => leaveChat({ chat: activeChat })}
                    activeChat={activeChat}
                />
            ) : (
                <Typography variant="title" style={{ color: '#fff' }}>
                    Gleb React Chat
                </Typography>
            )}
            <UserMenu
                disabled={!isConnected}
                activeUser={activeUser}
                logout={logout}
                editUser={editUser}
            />
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(AppTopBar);
