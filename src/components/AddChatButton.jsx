import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles/index';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    fab: {
        right: '24px',
        bottom: '72px',
        position: 'absolute',
    },
    modalWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        padding: theme.spacing.unit * 3,
        width: '30%',
        minWidth: '300px',
    },
});

class AddChatButton extends React.Component {
    static propTypes = {
        classes: PropTypes.objectOf(PropTypes.string).isRequired,
        onCreateChat: PropTypes.func.isRequired,
        disabled: PropTypes.bool.isRequired,
    };

    state = {
        open: false,
        title: {
            value: '',
            valid: true,
        },
    };

    toggleModal = () => {
        const { open } = this.state;
        this.setState({
            ...this.state,
            open: !open,
        });
    };

    onTitleChange = (event) => {
        const { value } = event.target;
        const { title } = this.state;
        this.setState({
            ...this.state,
            title: {
                ...title,
                value,
            },
        });
    };

    handleCreateClick = () => {
        const { onCreateChat } = this.props;
        const { title } = this.state;
        onCreateChat(title.value).then(() => {
            this.toggleModal();
            this.setState({
                ...this.state,
                title: {
                    value: '',
                    valid: true,
                },
            });
        });
    };

    render() {
        const { classes, disabled } = this.props;
        const { open, title } = this.state;
        return (
            <React.Fragment>
                <Fab
                    color="primary"
                    className={classes.fab}
                    disabled={disabled}
                    onClick={this.toggleModal}
                >
                    <AddIcon />
                </Fab>
                <Modal open={open} className={classes.modalWrapper} onClose={this.toggleModal}>
                    <Paper className={classes.modal}>
                        <Typography variant="title" id="modal-title">
                            Create new chat
                        </Typography>
                        <TextField
                            required
                            fullWidth
                            label="Chat title"
                            placeholder="Type the title..."
                            type="text"
                            margin="normal"
                            autoComplete="new-chat"
                            value={title.value}
                            onChange={this.onTitleChange}
                            error={!title.valid}
                        />
                        <Button color="primary" onClick={this.handleCreateClick}>
                            Create
                        </Button>
                    </Paper>
                </Modal>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddChatButton);
