import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ChatDrawer, AppTopBar, ChatMessageList } from '@src/components'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    }
});

const Chat = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppTopBar />
            <ChatDrawer/>
            <main className={classes.content}>
                <ChatMessageList />
            </main>
        </div>
    );
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};



export const ChatScreen = withStyles(styles)(Chat);