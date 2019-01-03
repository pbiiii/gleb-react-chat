import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { AuthScreen, ChatScreen, PrivateRoute } from '@src/containers';
import history from '@src/utils/history'

export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/auth" exact component={AuthScreen} />
            <PrivateRoute path="/chat/:chatId?" component={ChatScreen} />
        </Switch>
    </Router>
)
