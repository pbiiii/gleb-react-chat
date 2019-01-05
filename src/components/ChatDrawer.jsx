import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { DrawerSearchInput, ChatsList, DrawerBottomNavigation, AddChat } from "@src/components";


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

class ChatDrawerComponent extends React.Component {

    state = {
        activeTab: 'my'
    }

    onTabChange = (event, tabIndex) => {
        this.setState({ ...this.state, activeTab: tabIndex })
    }

    render() {
        const {
            classes,
            allChats,
            myChats,
            onCreateChat,
        } = this.props
        return (
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <DrawerSearchInput/>
                <Divider/>
                <ChatsList
                    chats={this.state.activeTab === 'my' ? myChats : allChats}
                />
                <AddChat
                    onCreateChat={onCreateChat}
                />
                <DrawerBottomNavigation
                    activeTab={this.state.activeTab}
                    onTabChange={this.onTabChange}
                />
            </Drawer>
        );
    }
}

export const ChatDrawer = withStyles(styles)(ChatDrawerComponent);