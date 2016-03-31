'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers';

function configStore(){
    const createStroeWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
    return createStroeWithMiddleware(reducers);
    // return createStore(reducers);
}

export default configStore();