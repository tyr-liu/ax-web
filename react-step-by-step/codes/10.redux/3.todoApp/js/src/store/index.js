'use strict';

import { createStore } from 'redux';
import reducers from '../reducers';

function configStore(){
    return createStore(reducers);
}

export default configStore();