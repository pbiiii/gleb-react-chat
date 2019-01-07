import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class ErrorMessageComponent extends React.Component {
    state = {
        open: false,
    };

    handleClose = (event, reason) => {
        this.setState({ open: false });
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.error) {
            this.setState({ open: true })
        }
    }

    render() {
        const { error } = this.props;
        if(!error) {
            return null
        }
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={this.state.open}
                autoHideDuration={6000}
                onClose={this.handleClose}
                message={<span >{error.message}</span>}
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

export const ErrorMessage = ErrorMessageComponent