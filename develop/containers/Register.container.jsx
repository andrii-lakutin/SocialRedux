import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import { registration, getRegistrationSCRFToken } from '../actions/server.actions';

import RegistrationForm from '../components/RegistrationForm.page.jsx';

class Register extends Component {

    componentDidUpdate () {
        let status = this.props.store.authentication.registrationResponse.status;
        if (status){
            browserHistory.push('/login')  
        }
    }

    render() {
        const { handleSubmitForm, getCSRFToken, csrfToken } = this.props;

        return (
            <RegistrationForm
                handleSubmitForm={handleSubmitForm}
                getCSRFToken={getCSRFToken}
                csrfToken={csrfToken}
            />
        );
    }
}

Register.propTypes = {
    handleSubmitForm: PropTypes.func,
    getCSRFToken : PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    csrfToken: state.authentication.registrationCsrfToken
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitForm: bindActionCreators(registration, dispatch),
    getCSRFToken : bindActionCreators(getRegistrationSCRFToken, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
