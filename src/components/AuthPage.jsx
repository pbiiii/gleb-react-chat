import React from 'react';
import { AuthForm } from '@src/components';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 3 + 64,
        width: 500,
    },
    tabContent: {
        padding: theme.spacing.unit * 3,
    },
});

class AuthPageComponent extends React.Component {

    state = {
        activeTab: 0,
        form: {
            username: {
                value: '',
                isValid: true,
            },
            password: {
                value: '',
                isValid: true,
            },
            repeatedPassword: {
                value: '',
                isValid: true,
            },
        }
    };

    handleTabChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    onInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: {
                    ...prevState.form[name],
                    value,
                },
            }
        }))
    }

    handleRegisterSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state.form
        this.props.register({
            username: username.value,
            password: password.value
        });
    }

    handleLoginSubmit = (event) => {
        event.preventDefault();
        const { username, password } = this.state.form
        this.props.login({
            username: username.value,
            password: password.value
        });
    }

    render() {
        const {
            classes, isAuthenticated, error,
        } = this.props;

        const { activeTab } = this.state;

        if (isAuthenticated) {
            return <Redirect to="/chat" />;
        }

        return (
            <React.Fragment>
                <AppBar>
                    <Toolbar>
                        <Typography variant="title" color="inherit" style={{ flex: 1 }}>
                            Gleb React Chat
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center">
                    <Grid item>
                        <Paper className={classes.paper}>
                            <AppBar position="static" color="default">
                                <Tabs value={activeTab} onChange={this.handleTabChange} fullWidth>
                                    <Tab label="Login" />
                                    <Tab label="Register" />
                                </Tabs>
                            </AppBar>
                            <div className={classes.tabContent}>
                                {activeTab === 0 &&
                                <AuthForm
                                    onSubmit={this.handleLoginSubmit}
                                    onChange={this.onInputChange}
                                    {...this.state.form}
                                />}
                                {activeTab === 1 &&
                                <AuthForm
                                    onSubmit={this.handleRegisterSubmit}
                                    onChange={this.onInputChange}
                                    {...this.state.form}
                                    isRegisterForm={true}
                                />}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export const AuthPage = withStyles(styles)(AuthPageComponent)