import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

import usersReducer from '../Redux/Users/UsersReducer';

const reducers = combineReducers({
    users: usersReducer,
    form: formReducer
});

const middlewares = applyMiddleware(thunk);

const store = createStore(reducers, middlewares);

export default store;
