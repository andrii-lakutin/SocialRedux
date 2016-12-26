import React, { PropTypes } from 'react';
//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


const App = (props) => (
    <MuiThemeProvider >
        <div id="app-view">
            {props.children}
        </div>
    </MuiThemeProvider>
);

App.propTypes = {
    children: PropTypes.element,
};

export default App;
