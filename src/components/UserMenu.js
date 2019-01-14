import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import EditProfileModal from './EditProfileModal';
import ActiveUserType from '../types/ActiveUserType';

class UserMenu extends React.Component {
    static propTypes = {
        activeUser: PropTypes.shape(ActiveUserType).isRequired,
        logout: PropTypes.func.isRequired,
        editUser: PropTypes.func.isRequired,
    };

    state = {
        anchorEl: null,
        modalIsOpen: false,
        editProfileForm: {
            username: '',
            firstName: '',
            lastName: '',
        },
    };

    componentWillReceiveProps(nextProps) {
        const { username, firstName, lastName } = nextProps.activeUser;
        this.setState({
            ...this.state,
            editProfileForm: {
                username,
                firstName,
                lastName,
            },
        });
    }

    openMenu = event => this.setState({ anchorEl: event.currentTarget });

    closeMenu = () => {
        this.setState({ anchorEl: null });
    };

    handleToggleModal = () => {
        const { modalIsOpen } = this.state;
        this.setState({ ...this.state, modalIsOpen: !modalIsOpen });
        this.closeMenu();
    };

    onInputChange = (event) => {
        const { editProfileForm } = this.state;
        this.setState({
            ...this.state,
            editProfileForm: {
                ...editProfileForm,
                [event.target.name]: event.target.value,
            },
        });
    };

    updateProfile = () => {
        const { editUser } = this.props;
        const { editProfileForm } = this.state;
        editUser({ ...editProfileForm }).then(() => {
            this.handleToggleModal();
        });
    };

    handleLogout = () => {
        const { logout } = this.props;
        logout();
        this.closeMenu();
    };

    render() {
        const {
            anchorEl, modalIsOpen, editProfileForm, disabled,
        } = this.state;
        return (
            <React.Fragment>
                <IconButton
                    color="inherit"
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.openMenu}
                    disabled={disabled}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.closeMenu}
                >
                    <MenuItem onClick={this.handleToggleModal}>Edit Profile</MenuItem>
                    <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
                <EditProfileModal
                    isOpen={modalIsOpen}
                    onClose={this.handleToggleModal}
                    onUpdateProfile={this.updateProfile}
                    onInputChange={this.onInputChange}
                    {...editProfileForm}
                />
            </React.Fragment>
        );
    }
}

export default UserMenu;
