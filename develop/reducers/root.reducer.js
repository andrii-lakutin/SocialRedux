import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authentication from './server.reducer';
import data from './data.reducer';

const rootReducer = combineReducers({
    authentication,
    data,
    form: formReducer
});

export default rootReducer;
