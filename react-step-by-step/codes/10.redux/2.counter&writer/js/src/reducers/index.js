/**
 * Created by liu.xinyi
 * on 2016/3/24.
 */
'use strict';
import {combineReducers} from 'redux';

import counter from './counter';
import writer from './writer';

export default combineReducers({counter, writer});