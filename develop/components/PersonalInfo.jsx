import React, { Component, PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Settings from 'material-ui/svg-icons/action/settings';

class PersonalInfo extends Component {
    render() {
        const { info } = this.props;

        return (
            <div className="PersonalInfoComponent">
                <List className="PersonalInfoList">
                    <Subheader inset={true}>About {info.firstName}</Subheader>
                    <ListItem
                        rightIcon={<Settings />}
                        primaryText={info.city}
                        secondaryText="City"
                        />
                    <ListItem
                        rightIcon={<Settings />}
                        primaryText={info.job}
                        secondaryText="Job"
                        />
                    <ListItem
                        rightIcon={<Settings />}
                        primaryText={info.skype}
                        secondaryText="Skype"
                        />
                </List>
            </div>
        );
    }
}

PersonalInfo.propTypes = {
    info: PropTypes.func
};

export default PersonalInfo;
