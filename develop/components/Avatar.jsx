import React, { Component, PropTypes } from 'react';

class Avatar extends Component {
    render() {
        const { url } = this.props;

        const Avatar = {
            backgroundImage: `url(${url})`,
        };

        return (
            <div className="AvatarComponent" style={Avatar}></div>
        );
    }
}

Avatar.propTypes = {
    url: PropTypes.string
};

export default Avatar;
