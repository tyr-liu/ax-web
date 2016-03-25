'use strict';

import { createStore, combineReducers } from 'redux';
import reducers from '../reducers';

function configStore(){
    return createStore(combineReducers(reducers));
}

export default configStore();