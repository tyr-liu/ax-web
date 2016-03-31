/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/10
 * Time: 16:28
 *
 */
'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import Master from './containers/master';
import Home from './containers/home';
import Factors from './containers/factors';
import Login from './containers/login';

render(
    (<Router history={hashHistory}>
        <Route path="/" component={Master}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/factors" component={Factors} />
        </Route>
        <Route path="/login" component={Login}/>
    </Router>),
    document.getElementById('app'));