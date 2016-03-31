/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/10
 * Time: 16:28
 *
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Master from './containers/master';
import Home from './containers/home';
import Factors from './containers/factors';
import Login from './containers/login';
import NoMatch from './containers/no-match';

render(
    (<Router history={hashHistory}>
        <Route path="/" component={Master}>
            <IndexRoute component={Home} />
            <Route path="/factors" component={Factors} />
        </Route>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NoMatch}/>
    </Router>),
    document.getElementById('app'));