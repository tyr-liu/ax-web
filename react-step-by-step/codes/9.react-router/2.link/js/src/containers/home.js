/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/10
 * Time: 16:46
 *
 */
'use strict';

import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <ul role="nav">
                    <li><Link to="/factors">监测项目</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;