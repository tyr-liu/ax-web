/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/17
 * Time: 17:20
 *
 */
'use strict';

import React from 'react';
import Humiture from './humiture';
import Rain from './rain';
import Surface from './surface';
import Deep from './deep';

class FactorSelector extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        factorId: React.PropTypes.number.isRequired
    };

    render() {
        if(this.props.factorId === 5){
            return <Humiture />
        } else if(this.props.factorId === 6){
            return <Rain />
        } else if(this.props.factorId === 9){
            return <Surface />
        }else if(this.props.factorId === 10){
            return <Deep />
        } else{
            return <div></div>
        }
    }
}

export default FactorSelector;