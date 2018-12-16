import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { DrawerSearchInput, ChatsList, DrawerBottomNavigation, AddChat } from "@src/components";


const drawerWidth = 320;

const styles = theme => ({

});

class ChatMessageListComponent extends React.Component {

    render() {
        const {
            classes
        } = this.props
        return (
            <div
                className={classes.messagesWrapper}
            >

            </div>
        )
    }

}

export const ChatMessageList = withStyles(styles)(ChatMessageListComponent);