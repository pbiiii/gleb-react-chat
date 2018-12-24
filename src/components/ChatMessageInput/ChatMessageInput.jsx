import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    wrapper: {
        position: 'fixed',
        minHeight: theme.spacing.unit * 8,
        width: `calc(100% - 320px)`,
        bottom: 0,
        right: 0,
        left: 'auto',
        padding: theme.spacing.unit * 3,
    },
    inputWrapper: {
        padding: theme.spacing.unit * 2,
        backgroundColor: '#fff',
        boxShadow: '1px '
    },
    input: {

    }
});

class ChatMessageInputComponent extends React.Component {

    state = {
        message: '',
    }

    onMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    onKeyPress = (event) => {
        const { value } = this.state;

        if (event.key === 'Enter' && value) {
            this.props.sendMessage(value);
            this.setState({ value: '' });
        }
    };

    render() {
        const {
            classes,
            // showJoinButton,
            onJoinButtonClick,
            disabled,
        } = this.props
        const showJoinButton = false
        return (
            <div
                className={classes.wrapper}
            >
                <Paper className={classes.inputWrapper}>
                    {
                        showJoinButton ? (

                            <Button
                                fullWidth
                                variant="raised"
                                color="primary"
                                disabled={disabled}
                                onClick={onJoinButtonClick}
                                className={classes.button}
                            >
                                Join
                            </Button>
                        ) : (
                            <Input
                                fullWidth
                                placeholder="Type your message…"
                                disabled={disabled}
                                value={this.state.value}
                                onChange={this.onMessageChange}
                                onKeyPress={this.onKeyPress}
                                className={classes.input}
                            />
                        )
                    }
                </Paper>
            </div>
        )
    }
}

export const ChatMessageInput = withStyles(styles)(ChatMessageInputComponent);