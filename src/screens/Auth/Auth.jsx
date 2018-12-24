import React from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import LoginForm from './LoginForm';
// import RegisterForm from './SignupForm';

const styles = theme => ({
    paper: {
        // eslint-disable-next-line
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
    };

    handleTabChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    render() {
        const {
            classes, register, login, isAuthenticated, error,
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
                            DogeCodes React Chat
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container justify="center">
                    <Grid item>
                        <Paper className={classes.paper}>
                            <AppBar position="static" color="default">
                                <Tabs value={activeTab} onChange={this.handleTabChange} fullWidth>
                                    <Tab label="Login" />
                                    <Tab label="Sign Up" />
                                </Tabs>
                            </AppBar>
                            <div className={classes.tabContent}>
                                {/*{activeTab === 0 && <LoginForm onSubmit={login} />}*/}
                                {/*{activeTab === 1 && <RegisterForm onSubmit={register} />}*/}
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export const AuthScreen = withStyles(styles)(AuthPageComponent);