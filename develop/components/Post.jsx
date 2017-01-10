import React, { Component, PropTypes } from 'react';

import Like from 'material-ui/svg-icons/action/favorite';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';

class Post extends Component {

    render() {
        const { post } = this.props;
        return (
            <Paper className="PostComponent" zDepth={1}>
                <p className="date">{`${post.ownerNameAndLastName} posted at ${post.date}`}</p>
                <h2 className="msg">{post.msg}</h2>
                <div className="like">
                    <IconButton touch={true} className="heart">
                        <Like />
                    </IconButton>
                    <span className="counter">{post.likes}</span></div>
            </Paper>
        );
    }
}

Post.propTypes = {
    post: PropTypes.object,
};

export default Post;
