import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';

class PostCreator extends Component {
    render() {
        const { pristine, submitting, handleSubmit } = this.props;

        return (
            <Paper zDepth={1} className="PostCreatorComponent">
                <form onSubmit={handleSubmit}>
                    <Field name="message" component={TextField} floatingLabelText="Wanna tell something?" multiLine={true} rows={2} fullWidth={true}/>
                    <RaisedButton
                        type="submit"
                        label="SEND"
                        backgroundColor="orange"
                        labelColor="white"
                        disabled={pristine || submitting}
                        className="submitBtn"
                        />
                </form>
            </Paper>
        );
    }
}

PostCreator.propTypes = {
    handleSubmit: PropTypes.func,
};

PostCreator = reduxForm({
    form: 'PostCreator',
})(PostCreator)

export default PostCreator;
