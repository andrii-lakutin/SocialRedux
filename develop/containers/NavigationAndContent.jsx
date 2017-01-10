import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';

import { Tabs, Tab } from 'material-ui/Tabs';
import Posts from 'material-ui/svg-icons/action/subject';
import Friends from 'material-ui/svg-icons/action/supervisor-account';
import Photos from 'material-ui/svg-icons/device/wallpaper';

import Post from '../components/Post.jsx';
import PostCreator from '../components/PostCreator.jsx';

import { submitPostMsg } from "../actions/data.actions";

class Navigation extends Component {

    postMsg(values){
        const { handleSubmitPostMsg, currentPage, handleResetForm } = this.props;
        const msg = values.message;
        const from = currentPage.owner;
        const fullName = `${currentPage.firstName} ${currentPage.lastName}`
        handleSubmitPostMsg(msg, from, fullName);
        handleResetForm('PostCreator');
    }

    render() {
        const { posts, handleSubmitPostMsg } = this.props;

        const tabsContainers = {
            backgroundColor: "transparent",
        };

        return (
            <div className="NavigationComponent">
                <Tabs tabItemContainerStyle={tabsContainers}
                    inkBarStyle={{ background: 'linear-gradient(to left, #45B649 , #DCE35B)' }}
                    initialSelectedIndex={0}>
                    <Tab
                        icon={<Posts />}
                        label="POSTS"
                        style={{ color: "#673AB7" }}
                        >
                        <PostCreator onSubmit={this.postMsg.bind(this)}/>
                        {posts.map(item => <Post post={item} key={item._id} />)}
                    </Tab>
                    <Tab
                        icon={<Friends />}
                        label="FRIENDS"
                        style={{ color: "#4CAF50" }}
                        />
                    <Tab
                        icon={<Photos />}
                        label="PHOTOS"
                        style={{ color: "#FF5722" }}
                        />
                </Tabs>
            </div>
        );
    }
}

Navigation.propTypes = {
    posts: PropTypes.array,
    handleSubmitPostMsg: PropTypes.func,
    handleResetForm: PropTypes.func
};

const mapStateToProps = (state, ownProps) => ({
    ...ownProps,
    currentPage: state.data.personalInfo.user
});

const mapDispatchToProps = (dispatch, ownPorps) => ({
    ...ownPorps,
    handleSubmitPostMsg: bindActionCreators(submitPostMsg, dispatch),
    handleResetForm: bindActionCreators(reset, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

