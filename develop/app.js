import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router } from 'react-router';

import routes from './config/appRoutes.jsx';
import configureStore from './store/root.store';
import appHistory from './config/appHistory';

import './styles/main.scss';

const initialState = {};
export const store = configureStore(initialState);


ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={appHistory} />
    </Provider>,

    document.getElementById('react-view')
);
