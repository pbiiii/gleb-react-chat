import React from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from "@material-ui/core/MenuItem";
import { EditProfileModal } from "./EditProfileModal";

const styles = theme => ({

});

class UserMenuComponent extends React.Component {

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

    handleToggleModal = () => {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
        this.closeMenu()
    }

    onInputChange = (event) => {
        this.setState({
            editProfileForm: {
                ...this.state.editProfileForm,
                [event.target.name]: event.target.value,
            }
        });
    }

    updateProfile = () => {
        this.handleToggleModal()
    }

    handleLogout = () => {
        this.props.onLogoutClick()
        this.closeMenu()
    }

    render() {
        const { anchorEl } = this.state;
        return (
            <React.Fragment>
                <IconButton
                    color="inherit"
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.openMenu}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.closeMenu}
                >
                    <MenuItem
                        onClick={this.handleToggleModal}
                    >
                        Edit Profile
                    </MenuItem>
                    <MenuItem
                        onClick={this.handleLogout}
                    >
                        Logout
                    </MenuItem>
                </Menu>
                <EditProfileModal
                    isOpen={this.state.modalIsOpen}
                    onClose={this.handleToggleModal}
                    onUpdateProfile={this.updateProfile}
                    onInputChange={this.onInputChange}
                    form={this.state.editProfileForm}
                />
            </React.Fragment>
        )
    };
}

export const UserMenu = withStyles(styles)(UserMenuComponent);