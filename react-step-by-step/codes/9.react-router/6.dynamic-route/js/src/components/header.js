/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/11
 * Time: 13:33
 *
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    static propTypes = {
        title: React.PropTypes.string.isRequired,
        links: React.PropTypes.array.isRequired
    };

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            {this.props.title}
                        </a>
                    </div>
                    <ul className="nav navbar-nav">
                        {
                            this.props.links.map(link=>(
                                <li>
                                    <Link key={link.path} to={link.path}>{link.text}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/login">退出登录</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;