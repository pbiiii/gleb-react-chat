import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import DrawerSearchInput from './DrawerSearchInput';
import ChatsList from './ChatsList';
import AddChat from './AddChat';
import DrawerBottomNavigation from './DrawerBottomNavigation';

const drawerWidth = 320;

const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        ...theme.mixins.toolbar,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    toolbarInput: {
        width: '90%',
    },
});

class ChatDrawer extends React.Component {
    state = {
        activeTab: 'my',
    };

    onTabChange = (event, tabIndex) => {
        this.setState({
            ...this.state,
            activeTab: tabIndex,
        });
    };

    render() {
        const {
            classes,
            allChats,
            myChats,
            onCreateChat,
            activeChat,
            isConnected,
        } = this.props;
        const { activeTab } = this.state;
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <DrawerSearchInput />
                <Divider />
                <ChatsList
                    disabled={!isConnected}
                    activeChat={activeChat}
                    chats={activeTab === 'my' ? myChats : allChats}
                />
                <AddChat
                    onCreateChat={onCreateChat}
                    disabled={!isConnected}
                />
                <DrawerBottomNavigation
                    activeTab={activeTab}
                    onTabChange={this.onTabChange}
                />
            </Drawer>
        );
    }
}

export default withStyles(styles)(ChatDrawer);
