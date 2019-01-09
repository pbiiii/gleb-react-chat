import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'src/utils/history';
import AuthScreen from './containers/AuthScreen';
import PrivateRoute from './containers/PrivateRoute';
import ChatScreen from './containers/ChatScreen';

export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/auth" exact component={AuthScreen} />
            <PrivateRoute path="/chat/:chatId?" component={ChatScreen} />
        </Switch>
    </Router>
);
