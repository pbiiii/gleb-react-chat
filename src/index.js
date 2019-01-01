import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from '@src/Router';
import { Provider } from 'react-redux'
import configureStore from './store'

const store = configureStore();
const rootEl = document.getElementById('root')

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>,
        rootEl,
    );
};

if (module.hot) {
    module.hot.accept('@src/Router', () => {
        render(Router);
    });
}

render(Router);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
