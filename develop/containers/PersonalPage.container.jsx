import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

import { isInSession, logout } from '../actions/server.actions';

class PersonalPage extends Component {

    componentWillMount(){
        this.props.checkSessions('/users/personal');
    }

    componentDidUpdate(){
        //If user logout - redirect. Or, if user try come to this URL without login - redirect too.
        let loginStatus = this.props.store.authentication.loginResponse.status;
        if(!loginStatus){
            browserHistory.push('/login');
        }
    }

    logout(){
        this.props.handleLogout('/auth/logout');
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>Wellcome Back!</h1>
                <p>{user.firstName}</p>
                <p>{user.lastName}</p>
                <p>{user.email}</p>
                <RaisedButton 
                        label="Logout"
                        backgroundColor="orange"
                        labelColor="white"
                        onClick={this.logout.bind(this)}
                    />
            </div>
        );
    }
}

PersonalPage.propTypes = {
    checkSessions: PropTypes.func,
    handleLogout: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    user: state.authentication.sessionsResponse.user
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    checkSessions: bindActionCreators(isInSession, dispatch),
    handleLogout : bindActionCreators(logout, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage);
