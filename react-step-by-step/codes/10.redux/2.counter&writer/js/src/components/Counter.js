/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 */
'use strict';

import React, { Component, PropTypes } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };

    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
            </p>
        )
    }
}

export default Counter;