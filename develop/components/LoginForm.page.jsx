import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import GetFormDataForAJAX from '../shared/GetFormDataForAJAX.js';

class LoginForm extends Component {

    submit(e){
        let data = GetFormDataForAJAX(e);
        data._csrf = this.props.csrfToken;
        this.props.handleSubmitForm('/auth/login', data);
    }

    componentDidMount(){
        this.props.getCSRFToken('/auth/getCSRFToken');
    }

    render() {
        const { handleSubmitForm } = this.props;

        return (
            <div>
                <h1>Login</h1>
                <form method="post" onSubmit={this.submit.bind(this)}>
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
                    />  
                </Link>
            </div>
        );
    }
}

LoginForm.propTypes = {
    handleSubmitForm: PropTypes.func,
    csrfToken: PropTypes.string,
    getCSRFToken : PropTypes.func
};

export default LoginForm;
