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
import Factor from './containers/factor';
import Login from './containers/login';
import NoMatch from './containers/no-match';
import State from './state';

//render(
//    (<Router history={hashHistory}>
//        <Route path="/" component={Master}>
//            <IndexRoute component={Home} />
//            <Route path="/factors" component={Factors}>
//                <Route path="/factors/:id" component={Factor} />
//            </Route>
//        </Route>
//        <Route path="/login" component={Login}/>
//        <Route path="*" component={NoMatch}/>
//    </Router>),
//    document.getElementById('app'));

const userRoutes = [
    {
        path: '/factors',
        component: Factors,
        childRoutes: [
            {
                path: '/factors/:id',
                component: Factor
            }
        ]
    }
];

const adminRoutes = [
    {
        path: '/users',
        component: 'div',
        childRoutes: [
            {
                path: '/users/:id',
                component: 'div'
            }
        ]
    }
];

let routes = [
    {
        path: '/',
        component: Master,
        indexRoute: {
            component: Home
        },
        childRoutes: State.role === 'user' ? userRoutes : adminRoutes
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: NoMatch
    }
];

render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));