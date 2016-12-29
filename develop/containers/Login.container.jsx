import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { SubmissionError } from 'redux-form';

import { login, isInSession } from '../actions/server.actions';

import LoginForm from '../components/LoginForm.page.jsx';

class Login extends Component {

    componentDidUpdate() {
        let status = this.props.store.authentication.loginResponse.status;
        let session = this.props.store.authentication.sessionsResponse;
        if (status && session.status) {
            browserHistory.push(`/personal/${session.user._id}`)
        }
    }

    submit(values) {
        let data = {
            email: values.email,
            password: values.password,
        }
        this.props.handleSubmitForm(`/auth/login`, data);
        this.props.checkSessions(`/users/personal`);
    }

    render() {
        const { handleSubmitForm, logForm } = this.props;

        return (
            <div>
                <LoginForm handleSubmitForm={handleSubmitForm}
                    logForm={logForm}
                    onSubmit={this.submit.bind(this)} />
            </div>
        );
    }
}

Login.propTypes = {
    handleSubmitForm: PropTypes.func,
    logForm: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    logForm: state.form
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitForm: bindActionCreators(login, dispatch),
    checkSessions: bindActionCreators(isInSession, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
