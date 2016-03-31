/**
 * Created by liu.xinyi
 * on 2016/3/24.
 */
'use strict';
import {WRITER_CHANGE} from '../actions/writer';

const initState = {text: '输入的内容是:   '};

function counter(state = initState, action) {
    switch (action.type) {
        case WRITER_CHANGE:
            return {text: `输入的内容是:   ${action.text}`};
        default:
            return state;
    }
}

export default counter;