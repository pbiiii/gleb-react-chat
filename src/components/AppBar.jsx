import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Toolbar from '@material-ui/core/Toolbar';
import { UserMenu } from "@src/components";

const drawerWidth = 320;

const styles = theme => ({
    appBar: {
        position: 'fixed',
        width: 'calc(100% - 320px)',
        marginLeft: drawerWidth,
    },
    appBarTitle: {
        flex: 1,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        color: theme.palette.secondary.contrastText,
    },
});

const AppBarComponent = (
    {
        classes,
        activeChat,
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
            <Toolbar>
                {activeChat ? (
                    <React.Fragment>
                        <Avatar colorFrom={activeChat._id}>{activeChat.title}</Avatar>
                        <Typography variant="title" className={classes.appBarTitle}>
                            {activeChat.title}
                            {/*<ChatMenu*/}
                                {/*disabled={!isConnected}*/}
                                {/*activeUser={activeUser}*/}
                                {/*onLeaveClick={() => leaveChat(activeChat._id)}*/}
                                {/*onDeleteClick={() => deleteChat(activeChat._id)}*/}
                            {/*/>*/}
                        </Typography>
                    </React.Fragment>
                ) : (
                    <Typography variant="title" className={classes.appBarTitle}>
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