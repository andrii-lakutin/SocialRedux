import React, { Component, PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Settings from 'material-ui/svg-icons/action/settings';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class PersonalInfo extends Component {

    state = {
        open: false,
        field: null,
        newValue: '',
        errorText: '',
    };

    handleOpen = (field) => {
        this.setState({ open: true, field: field });
    };

    handleClose = () => {
        this.setState({ open: false, field: null, newValue: '' });
    };

    handleChangeInput = (event) => {
        this.setState({
            newValue: event.target.value,
        });
    };

    change () {
        let field = this.state.field.toLowerCase(),
            newValue = this.state.newValue,
            currentPageOwner = this.props.currentPage.owner;
        if (!newValue) {
            this.setState({
                errorText: "Must be filled!",
            });
        } else {
            this.setState({
                errorText: "",
            });
            this.props.handleChange(field, newValue, currentPageOwner);
            this.handleClose();
        }
    }

    render() {
        const { user, currentPage } = this.props;

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Change"
                primary={true}
                onTouchTap={this.change.bind(this)}
                />,
        ];

        return (
            <div className="PersonalInfoComponent">
                <List className="PersonalInfoList">
                    <Subheader inset={true}>About {currentPage.firstName}</Subheader>
                    <ListItem
                        rightIcon={user._id === currentPage.owner ? <Settings onTouchTap={this.handleOpen.bind(this, "City")} /> : null}
                        primaryText={currentPage.city}
                        secondaryText="City"                       
                        />
                    <ListItem
                        rightIcon={user._id === currentPage.owner ? <Settings onTouchTap={this.handleOpen.bind(this, "Job")} /> : null}
                        primaryText={currentPage.job}
                        secondaryText="Job"                      
                        />
                    <ListItem
                        rightIcon={user._id === currentPage.owner ? <Settings onTouchTap={this.handleOpen.bind(this, "Skype")} /> : null}
                        primaryText={currentPage.skype}
                        secondaryText="Skype"                   
                        />
                </List>
                <Dialog
                    title={this.state.field}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <TextField
                        hintText="New value"
                        fullWidth={true}
                        value={this.state.newValue}
                        errorText={this.state.errorText}
                        onChange={this.handleChangeInput}
                        />
                </Dialog>
            </div>
        );
    }
}

PersonalInfo.propTypes = {
    handleChange: PropTypes.func,
    user: PropTypes.object,
    currentPage: PropTypes.object
};

export default PersonalInfo;
