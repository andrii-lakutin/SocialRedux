import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

import asyncValidate from '../shared/asyncValidateRegistration';

// validation functions
const required = value => (!value) ? 'Required' : "";
const email = value => value &&
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : "";
const minLength = value => (value.length < 9) ? 'Password must have at least 8 characters' : "";

class RegistrationForm extends Component {

    componentDidMount() {
        this.props.getCSRFToken('/auth/getCSRFToken');
    }

    render() {
        const { pristine, submitting, handleSubmit } = this.props;
        return (
            <div className="RegisterFormComponent">
                <h1>Create an Account</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <Field name="firstName" component={TextField} hintText="First Name" validate={[required]} maxLength={20}/>
                    <Field name="lastName" component={TextField} hintText="Last Name" validate={[required]} maxLength={20}/>
                    <Field name="email" component={TextField} hintText="Email" type="email" validate={[ required, email ]}/>
                    <Field name="password" component={TextField} hintText="Password" type="password" validate={[required, minLength]}/>
                    <RaisedButton
                        type="submit"
                        label="Register"
                        backgroundColor="orange"
                        labelColor="white"
                        disabled={pristine || submitting}
                        />
                </form>
            </div>
        );
    }
}

RegistrationForm.propTypes = {
    handleSubmitForm: PropTypes.func,
    getCSRFToken: PropTypes.func,
    csrfToken: PropTypes.string,
};

RegistrationForm = reduxForm({
  form: 'RegistrationForm',
  asyncValidate,
  asyncBlurFields: ['email'] //if you want to check response without submit(on blur event) - add fields here as strings.
})(RegistrationForm)

export default RegistrationForm;
