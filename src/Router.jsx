import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import { AuthScreen, ChatScreen } from '@src/screens';

export const Router = () => (
    <BrowserRouter>
        <div>
            <Route path="/auth" exact component={AuthScreen} />
            <Route path="/chat/:chatId?" component={ChatScreen} />
        </div>
    </BrowserRouter>
)
