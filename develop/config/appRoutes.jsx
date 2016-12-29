import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../containers/App.jsx';
import Register from '../containers/Register.container.jsx';
import Login from '../containers/Login.container.jsx';
import PersonalPage from '../containers/PersonalPage.container.jsx';

export default (
    <Route path="/" component={App}>
        <IndexRedirect to="login" />

        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="personal/:userId" component={PersonalPage}/>
    </Route>
);
