import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
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

const DrawerSearchInput = ({ classes }) => (
    <div className={classes.toolbar}>
        <Input
            className={classes.toolbarInput}
            placeholder="Search chats..."
        />
    </div>
);

export default withStyles(styles)(DrawerSearchInput);
