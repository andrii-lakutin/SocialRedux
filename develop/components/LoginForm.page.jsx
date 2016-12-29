import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import asyncValidate from '../shared/asyncValidateLogin';

const required = value => (!value) ? 'Required' : "";
const email = value => value &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : "";
const minLength = value => (value.length < 9) ? 'Password must have at least 8 characters' : "";

class LoginForm extends Component {

    render() {
        const { pristine, submitting, handleSubmit } = this.props;
        return (
            <div className="LoginFormComponent">
                <h1>Login</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <Field name="email" component={TextField} hintText="Email" type="email" validate={[required, email]} />
                    <Field name="password" component={TextField} hintText="Password" type="password" validate={[required, minLength]} />
                    <RaisedButton
                        type="submit"
                        label="Login"
                        backgroundColor="orange"
                        labelColor="white"
                        />
                </form>
                <Link to="/register">
                    <RaisedButton
                        label="First time here?"
                        backgroundColor="orange"
                        labelColor="white"
                        disabled={pristine || submitting}
                        />
                </Link>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmitForm: PropTypes.func,
};

LoginForm = reduxForm({
    form: 'LoginForm',
    asyncValidate,
    asyncBlurFields: [] //if you want to check response without submit(on blur event) - add fields here as strings.
})(LoginForm)

export default LoginForm;
