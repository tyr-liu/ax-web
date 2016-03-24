/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 */
'use strict';
import {INCREMENT, DECREMENT} from '../actions';

const stateTree = {count: 0};

function counter(state = stateTree, action) {
    switch (action.type) {
        case INCREMENT:
            return {count: state.count + 1};
        case DECREMENT:
            return {count: state.count - 1};
        default:
            return state;
    }
}

export default counter;