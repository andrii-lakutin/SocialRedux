import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { SubmissionError } from 'redux-form';

import { login, getLoginSCRFToken, isInSession } from '../actions/server.actions';

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
        data._csrf = this.props.csrfToken;
        this.props.handleSubmitForm(`/auth/login`, data);
        this.props.checkSessions(`/users/personal`);
    }

    render() {
        const { handleSubmitForm, getCSRFToken, csrfToken, logForm } = this.props;

        return (
            <div>
                <LoginForm handleSubmitForm={handleSubmitForm}
                    getCSRFToken={getCSRFToken}
                    logForm={logForm}
                    csrfToken={csrfToken}
                    onSubmit={this.submit.bind(this)} />
            </div>
        );
    }
}

Login.propTypes = {
    handleSubmitForm: PropTypes.func,
    getCSRFToken: PropTypes.func,
    csrfToken: PropTypes.string,
    logForm: PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    csrfToken: state.authentication.loginCsrfToken,
    logForm: state.form
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitForm: bindActionCreators(login, dispatch),
    checkSessions: bindActionCreators(isInSession, dispatch),
    getCSRFToken: bindActionCreators(getLoginSCRFToken, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
