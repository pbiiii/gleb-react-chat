import React from 'react';
import { withStyles } from "@material-ui/core/styles/index";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({

});


const EditProfileMenuComponent = ({classes, isOpen, onClose, onUpdateProfile, onInputChange, form}) => {
    const {
        firstName,
        lastName,
        userName
    } = form
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="userName"
                    label="User name"
                    type="text"
                    fullWidth
                    value={userName}
                />
                <TextField
                    margin="dense"
                    id="firstName"
                    label="First name"
                    type="test"
                    fullWidth
                    value={firstName}
                />
                <TextField
                    margin="dense"
                    id="lastName"
                    label="Last name"
                    type="text"
                    fullWidth
                    value={lastName}
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
    )
}

export const EditProfileModal = withStyles(styles)(EditProfileMenuComponent);