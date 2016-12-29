import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { SubmissionError } from 'redux-form';

import { registration, getRegistrationSCRFToken } from '../actions/server.actions';

import RegistrationForm from '../components/RegistrationForm.page.jsx';

class Register extends Component {

    componentDidUpdate () {
        let status = this.props.store.authentication.registrationResponse.status;
        if (status){
            browserHistory.push('/login')  
        }
    }

    submit(values) {
        let data = {
            firstName : values.firstName,
            lastName  : values.lastName,
            email : values.email,
            password : values.password,
        }
        data._csrf = this.props.csrfToken;
        this.props.handleSubmitForm('/auth/register', data);
    }

    render() {
        const { handleSubmitForm, getCSRFToken, csrfToken, regForm } = this.props;
        return (
            <RegistrationForm
                handleSubmitForm={handleSubmitForm}
                getCSRFToken={getCSRFToken}
                regForm={regForm}
                onSubmit={this.submit.bind(this)}
            />
        );
    }
}

Register.propTypes = {
    handleSubmitForm: PropTypes.func,
    getCSRFToken : PropTypes.func,
    csrfToken : PropTypes.string,
    regForm : PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    csrfToken: state.authentication.registrationCsrfToken,
    regForm : state.form
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitForm: bindActionCreators(registration, dispatch),
    getCSRFToken : bindActionCreators(getRegistrationSCRFToken, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
