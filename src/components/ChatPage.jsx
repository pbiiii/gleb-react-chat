import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
    ChatDrawer,
    AppTopBar,
    ChatMessageList,
    ChatMessageInput
} from '@src/components'

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
    }
});

const ChatPageComponent = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppTopBar />
            <ChatDrawer/>
            <main className={classes.content}>
                <ChatMessageList />
                <ChatMessageInput />
            </main>
        </div>
    );
}

export const ChatPage = withStyles(styles)(ChatPageComponent);