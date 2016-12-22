import React, { Component, PropTypes } from 'react';

class CommonPage extends Component {
    render() {
        const { handleCommonAction } = this.props;

        return (
            <div
              onClick={handleCommonAction}
            >
                Common page
            </div>
        );
    }
}

CommonPage.propTypes = {
    handleCommonAction: PropTypes.func,
};

export default CommonPage;
