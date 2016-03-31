/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 */
'use strict';
import {COUNTER_INCREMENT, COUNTER_DECREMENT} from '../actions/counter';

const initState = {count: 0};

function counter(state = initState, action) {
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {count: state.count + 1};
        case COUNTER_DECREMENT:
            return {count: state.count - 1};
        default:
            return state;
    }
}

export default counter;