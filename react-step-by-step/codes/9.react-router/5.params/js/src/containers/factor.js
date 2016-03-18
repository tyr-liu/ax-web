/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/18
 * Time: 9:27
 *
 */
'use strict';
import React from 'react';
import FactorSelector from './factors/factor-selector';

class Factor extends React.Component {
    render() {
        return <FactorSelector factorId={Number(this.props.params.id)} />;
    }
}

export default Factor;