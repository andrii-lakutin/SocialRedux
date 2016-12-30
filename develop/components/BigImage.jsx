import React, { Component, PropTypes } from 'react';

class BigImage extends Component {
    render() {
        const { url } = this.props;

        const bigImage = {
            backgroundImage: `url(${url})`,
        };

        return (
            <div className="BigImageComponent" style={bigImage}></div>
        );
    }
}

BigImage.propTypes = {
    url: PropTypes.string
};

export default BigImage;
