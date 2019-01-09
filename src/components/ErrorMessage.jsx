import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class ErrorMessage extends React.Component {
    state = {
        open: false,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.error) {
            this.setState({ open: true });
        }
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { error } = this.props;
        if (!error) {
            return null;
        }
        const { open } = this.state;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                message={<span>{error.message}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }
}

export default ErrorMessage;
