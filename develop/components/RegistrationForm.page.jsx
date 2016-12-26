import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import GetFormDataForAJAX from '../shared/GetFormDataForAJAX.js';

class RegistrationForm extends Component {

    submit(e){
        let data = GetFormDataForAJAX(e);
        data._csrf = this.props.csrfToken;
        this.props.handleSubmitForm('/auth/register', data);
    }

    componentDidMount(){
        this.props.getCSRFToken('/auth/getCSRFToken');
    }

    render() {
        const { handleSubmitForm } = this.props;

        return (
            <div>
                <h1>Create an Account</h1>
                <form method="post" onSubmit={this.submit.bind(this)}>
                    <TextField
                        floatingLabelText="First Name"
                    /><br />
                    <TextField
                        floatingLabelText="Last Name"
                    /><br />
                    <TextField
                        type="email"
                        floatingLabelText="Email"
                    /><br />
                    <TextField
                        type="password"
                        floatingLabelText="Password"
                    /><br />
                    <RaisedButton 
                        type="submit"
                        label="Register"
                        backgroundColor="orange"
                        labelColor="white"
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

export default RegistrationForm;
