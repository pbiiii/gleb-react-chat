import React from 'react'
import { Router, Route } from "react-router-dom";
import { AuthScreen, ChatScreen } from '@src/screens';
import history from '@src/utils/history'

export default () => (
    <Router history={history}>
        <div>
            <Route path="/auth" exact component={AuthScreen} />
            <Route path="/chat/:chatId?" component={ChatScreen} />
        </div>
    </Router>
)
