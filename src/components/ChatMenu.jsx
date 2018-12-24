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
        editProfileForm: {
            userName: '',
            firstName: '',
            lastName: '',
        }
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
            activeUser,
            onLeaveClick,
            activeChat,
            classes,
        } = this.props
        const disabled = false
        const { anchorEl } = this.state;
        const chatTitle = activeChat.title.substring(0, 2).toUpperCase()
        return (
            <Typography variant="body1" className={classes.chatMenuContainer}>
                <Avatar>{chatTitle}</Avatar>
                <Typography variant="title" className={classes.chatMenuTitle}>
                    {activeChat.title}
                </Typography>
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
                    <MenuItem
                        onClick={onLeaveClick}
                    >
                        Leave chat
                    </MenuItem>
                </Menu>
            </Typography>
        );
    }
}

export const ChatMenu = withStyles(styles)(ChatMenuComponent);