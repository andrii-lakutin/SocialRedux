import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
// import { SubmissionError } from 'redux-form';

import { registration } from '../actions/server.actions';

import RegistrationForm from '../components/RegistrationForm.page.jsx';

class Register extends Component {

    componentDidUpdate() {
        const status = this.props.store.authentication.registrationResponse.status;
        if (status) {
            browserHistory.push('/login');
        }
    }

    submit(values) {
        const data = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
        };
        this.props.handleSubmitForm('http://localhost:3000/auth/register', data);
    }

    render() {
        const { regForm } = this.props;
        return (
            <RegistrationForm
              regForm={regForm}
              onSubmit={this.submit.bind(this)}
            />
        );
    }
}

Register.propTypes = {
    handleSubmitForm: PropTypes.func,
    regForm: PropTypes.object,
    store: PropTypes.object,
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    regForm: state.form,
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitForm: bindActionCreators(registration, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
