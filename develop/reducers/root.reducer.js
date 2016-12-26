import { combineReducers } from 'redux';

import common from './common.reducer';
import authentication from './server.reducer';

const rootReducer = combineReducers({
    common,
    authentication
});

export default rootReducer;
