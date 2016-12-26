import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { login, getLoginSCRFToken } from '../actions/server.actions';

import LoginForm from '../components/LoginForm.page.jsx';

class Login extends Component {

    componentDidUpdate () {
        let status = this.props.store.authentication.loginResponse.status;
        if (status){
            browserHistory.push('/personal')  
        }
    }

    render() {
        const { handleSubmitForm, getCSRFToken, csrfToken } = this.props;

        return (
            <div>
                <LoginForm handleSubmitForm={handleSubmitForm}
                           getCSRFToken={getCSRFToken}
                           csrfToken={csrfToken}/>
            </div>
        );
    }
}

Login.propTypes = {
   handleSubmitForm: PropTypes.func,
   getCSRFToken : PropTypes.func,
   csrfToken: PropTypes.string
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    csrfToken: state.authentication.loginCsrfToken
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitForm: bindActionCreators(login, dispatch),
    getCSRFToken : bindActionCreators(getLoginSCRFToken, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
