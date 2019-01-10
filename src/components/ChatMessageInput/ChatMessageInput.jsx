import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    wrapper: {
        position: 'fixed',
        minHeight: theme.spacing.unit * 8,
        width: 'calc(100% - 320px)',
        bottom: 0,
        right: 0,
        left: 'auto',
        padding: theme.spacing.unit * 3,
    },
    inputWrapper: {
        padding: theme.spacing.unit * 2,
        backgroundColor: '#fff',
        boxShadow: '1px',
    },
    input: {},
});

class ChatMessageInput extends React.Component {
    state = {
        content: '',
    };

    onMessageChange = event => this.setState({ content: event.target.value });

    onKeyPress = (event) => {
        const { content } = this.state;
        const { sendMessage } = this.props;
        if (event.key === 'Enter' && content) {
            sendMessage(content);
            this.setState({ content: '' });
        }
    };

    render() {
        const { content } = this.state;
        const {
            classes, activeUser, joinChat, disabled,
        } = this.props;
        const showJoinButton = !activeUser.isChatMember;
        return (
            <div className={classes.wrapper}>
                <Paper className={classes.inputWrapper}>
                    {showJoinButton ? (
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={disabled}
                            onClick={joinChat}
                            className={classes.button}
                        >
                            Join
                        </Button>
                    ) : (
                        <Input
                            fullWidth
                            placeholder="Type your message…"
                            disabled={disabled}
                            value={content}
                            onChange={this.onMessageChange}
                            onKeyPress={this.onKeyPress}
                            className={classes.input}
                        />
                    )}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(ChatMessageInput);
