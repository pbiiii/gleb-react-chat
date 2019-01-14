import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChatType from '../types/ChatType';
import ActiveUserType from '../types/ActiveUserType';

const styles = theme => ({
    chatMenuContainer: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
    },
    chatMenuTitle: {
        color: '#fff',
        marginLeft: theme.spacing.unit * 2,
    },
});

class ChatMenu extends React.Component {
    static propTypes = {
        classes: PropTypes.objectOf(PropTypes.string).isRequired,
        leaveChat: PropTypes.func.isRequired,
        deleteChat: PropTypes.func.isRequired,
        activeChat: PropTypes.shape(ChatType).isRequired,
        activeUser: PropTypes.shape(ActiveUserType).isRequired,
        disabled: PropTypes.bool.isRequired,
    };

    state = {
        anchorEl: null,
    };

    openMenu = event => this.setState({ anchorEl: event.currentTarget });

    closeMenu = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const {
            leaveChat, deleteChat, activeChat, activeUser, classes, disabled,
        } = this.props;
        const { anchorEl } = this.state;
        const chatTitle = activeChat.title.substring(0, 2).toUpperCase();
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
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="chat-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.closeMenu}
                        >
                            {activeUser.isMember && (
                                <MenuItem onClick={leaveChat}>Leave chat</MenuItem>
                            )}
                            {activeUser.isCreator && (
                                <MenuItem onClick={deleteChat}>Delete chat</MenuItem>
                            )}
                        </Menu>
                    </React.Fragment>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(ChatMenu);
