import React from 'react';
import {withStyles} from "@material-ui/core/styles/index";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    chatMenuContainer: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center'
    },
    chatMenuTitle: {
        color: '#fff',
        marginLeft: theme.spacing.unit * 2
    }
});

class ChatMenuComponent extends React.Component {
    state = {
        anchorEl: null,
        modalIsOpen: false,
    };

    openMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    closeMenu = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const {
            // disabled = false,
            leaveChat,
            deleteChat,
            activeChat,
            activeUser,
            classes,
        } = this.props
        const disabled = false
        const { anchorEl } = this.state;
        const chatTitle = activeChat.title.substring(0, 2).toUpperCase()
        return (
            <div className={classes.chatMenuContainer}>
                <Avatar>{chatTitle}</Avatar>
                <Typography variant="title" className={classes.chatMenuTitle}>
                    {activeChat.title}
                </Typography>
                {activeUser.isChatMember && (
                    <React.Fragment>
                        <IconButton
                            color="inherit"
                            aria-owns={anchorEl ? 'chat-menu' : null}
                            aria-haspopup="true"
                            disabled={disabled}
                            onClick={this.openMenu}
                        >
                            <MoreVertIcon/>
                        </IconButton>
                        <Menu
                            id="chat-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.closeMenu}
                        >
                            {activeUser.isMember && <MenuItem onClick={leaveChat}>Leave chat</MenuItem>}
                            {activeUser.isCreator && <MenuItem onClick={deleteChat}>Delete chat</MenuItem>}
                        </Menu>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export const ChatMenu = withStyles(styles)(ChatMenuComponent);