/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/10
 * Time: 16:28
 *
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { increment, decrement } from './actions';

// 创建全局唯一的store，插入reducers
const store = createStore(counter);

// 呈现应用的组件
function render() {
    // 呈现时输出当前的state tree
    console.log(`state tree:    ${JSON.stringify(store.getState())}`);

    // 在div中插入组件，值来自于store.getState()，点击事件触发store.dispatch()
    ReactDOM.render(
        <Counter
            value={store.getState().count}
            onIncrement={() => store.dispatch(increment())}
            onDecrement={() => store.dispatch(decrement())}
        />,
        document.getElementById('app')
    )
}

// 初始调用render函数
render();
// 监听store，如果store中的state tree发生变更，则调用render函数重新渲染
store.subscribe(render);
