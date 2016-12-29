import React, { Component, PropTypes } from 'react';

import IconButton from 'material-ui/IconButton';
import LogoutIcon from 'material-ui/svg-icons/action/exit-to-app';
import LoginIcon from 'material-ui/svg-icons/action/perm-identity';

class Header extends Component {
    render() {
        const { handleLogout, handleLogin, currentPage, isLogin } = this.props;

        return (
            <div className="HeaderComponent">

                <p className="header-name">{currentPage.firstName + " " + currentPage.lastName}</p>
                {
                    isLogin ?
                        <div className="header-login" onClick={handleLogout}>
                            <p>Logout</p>
                            <IconButton tooltip="Logout" tooltipPosition="bottom-left" onClick={handleLogout}>
                                <LogoutIcon color={"white"} />
                            </IconButton>
                        </div>
                        :
                        <div className="header-login" onClick={handleLogin}>
                            <p>Login</p>
                            <IconButton tooltip="Login" tooltipPosition="bottom-left">
                                <LoginIcon color={"white"} />
                            </IconButton>
                        </div>
                }
            </div>
        );
    }
}

Header.propTypes = {
    handleLogout: PropTypes.func,
    isLogin: PropTypes.bool,
    handleLogin: PropTypes.func
};

export default Header;
