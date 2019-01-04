import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/es/Typography/Typography";
import Toolbar from '@material-ui/core/Toolbar';
import { UserMenu, ChatMenu } from "@src/components";

const drawerWidth = 320;

const styles = theme => ({
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

const AppBarComponent = (
    {
        classes,
        activeChat = {title: 'Active chat'},
        isConnected,
        activeUser,
        leaveChat,
        deleteChat,
        logout,
        editUser
    }
) => {
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.appBarTitle}>
                {activeChat ? (
                    <ChatMenu
                        disabled={!isConnected}
                        activeUser={activeUser}
                        onLeaveClick={() => leaveChat(activeChat._id)}
                        activeChat={activeChat}
                    />
                ) : (
                    <Typography variant="title" >
                        Gleb React Chat
                    </Typography>
                )}
                <UserMenu
                    disabled={!isConnected}
                    activeUser={activeUser}
                    onLogoutClick={logout}
                    onEditProfileClick={editUser}
                />
            </Toolbar>
        </AppBar>
    );
}

export const AppTopBar = withStyles(styles)(AppBarComponent);