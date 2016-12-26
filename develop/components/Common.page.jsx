import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class CommonPage extends Component {
    render() {
        const { handleCommonAction } = this.props;

        return (
            <div
              onClick={handleCommonAction}
            >
                <h1>Login Form</h1>
                <RaisedButton 
                    label="First time here?"
                    backgroundColor="orange"
                    labelColor="white"
                />
            </div>
        );
    }
}

CommonPage.propTypes = {
    handleCommonAction: PropTypes.func,
};

export default CommonPage;
