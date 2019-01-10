import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/es/DialogTitle/DialogTitle';
import DialogContent from '@material-ui/core/es/DialogContent/DialogContent';
import TextField from '@material-ui/core/es/TextField/TextField';
import DialogActions from '@material-ui/core/es/DialogActions/DialogActions';
import Button from '@material-ui/core/es/Button/Button';

const EditProfileMenu = ({
    isOpen, onClose, onUpdateProfile, onInputChange, firstName, lastName, username,
}) => (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="username"
                label="User name"
                type="text"
                fullWidth
                value={username}
                name="username"
                onChange={onInputChange}
            />
            <TextField
                margin="dense"
                id="firstName"
                label="First name"
                type="test"
                fullWidth
                value={firstName}
                name="firstName"
                onChange={onInputChange}
            />
            <TextField
                margin="dense"
                id="lastName"
                label="Last name"
                type="text"
                fullWidth
                value={lastName}
                name="lastName"
                onChange={onInputChange}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Cancel
            </Button>
            <Button onClick={onUpdateProfile} color="primary">
                Save
            </Button>
        </DialogActions>
    </Dialog>
);

EditProfileMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onUpdateProfile: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    username: PropTypes.string,
};

EditProfileMenu.defaultProps = {
    firstName: '',
    lastName: '',
    username: '',
};

export default EditProfileMenu;
