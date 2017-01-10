import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, browserHistory } from 'react-router';

import Header from "../components/Header.jsx";
import BigImage from "../components/BigImage.jsx";
import Avatar from "../components/Avatar.jsx";
import PersonalInfo from "../components/PersonalInfo.jsx";
import Navigation from "./NavigationAndContent.jsx";

import { isInSession, logout } from '../actions/server.actions';
import { getPersonalInfo, getPosts, personalChange } from "../actions/data.actions";

class PersonalPage extends Component {

    componentWillMount() {
        this.props.checkSessions('/users/personal');
        this.props.loadInfo(`/users/personal/${this.props.params.userId}`);
    }

    componentDidUpdate() {
        let logoutTrigger = this.props.store.authentication.logoutTrigger;
        if (logoutTrigger) {
            browserHistory.push('/login');
        }
    }

    logout() {
        this.props.handleLogout('/auth/logout');
    }

    login() {
        browserHistory.push('/login');
    }

    render() {
        const { user, currentPage, posts, handlePersonalChange, store } = this.props;

        return (
            <div className="PersonalPageContainer">
                {user._id === currentPage.owner ?
                    <Header currentPage={currentPage} handleLogout={this.logout.bind(this)} isLogin={true} /> :
                    <Header currentPage={currentPage} handleLogin={this.login.bind(this)} isLogin={false} />}
                <BigImage url={currentPage.headerUrl} />
                <div className="PageContent">
                    <div className="AvatarInfoColumn">
                        <Avatar url={currentPage.avatarUrl} />
                        <PersonalInfo user={user}
                            currentPage={currentPage}
                            handleChange={handlePersonalChange} />
                    </div>
                    <Navigation posts={posts} />
                </div>
            </div>
        );
    }
}

PersonalPage.propTypes = {
    checkSessions: PropTypes.func,
    handleLogout: PropTypes.func,
    handleLogin: PropTypes.func,
    loadInfo: PropTypes.func,
    loadPosts: PropTypes.func,
    handlePersonalChange: PropTypes.func,
    user: PropTypes.object,
    currentPage: PropTypes.object,
    posts: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    store: state,
    user: state.authentication.sessionsResponse.user,
    currentPage: state.data.personalInfo.user,
    posts: state.data.personalInfo.user.posts
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    checkSessions: bindActionCreators(isInSession, dispatch),
    loadInfo: bindActionCreators(getPersonalInfo, dispatch),
    handleLogout: bindActionCreators(logout, dispatch),
    handlePersonalChange: bindActionCreators(personalChange, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonalPage);
