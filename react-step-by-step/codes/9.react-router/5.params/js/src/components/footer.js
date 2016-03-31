/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/11
 * Time: 13:33
 *
 */
'use strict';

import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.style = {
            width: '100%',
            height: 50,
            color: '#fff',
            backgroundColor: '#000',
            lineHeight: '50px',
            textAlign: 'center'
        }
    }

    static propTypes = {
        text: React.PropTypes.string.isRequired
    };

    render() {
        return (
            <div style={this.style}>
                {this.props.text}
            </div>
        );
    }
}

export default Footer;