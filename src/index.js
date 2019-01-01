import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router } from '@src/Router';
import { Provider } from 'react-redux'
import store from './store'

const rootEl = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        rootEl,
    );
};

render(Router);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
