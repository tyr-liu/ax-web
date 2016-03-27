 'use strict';
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Provider} from 'react-redux';// 引入react-redux
 import TodoApp from './container/app';
 import store from './store';// 通过redux创建的全局store对象

 // ReactDOM.render(
 //     <TodoApp />,
 //     document.getElementById('app')
 // );
 // 使用一个Provider组件包裹整个TodoApp组件
 ReactDOM.render(
     <Provider store={store}>
         <TodoApp />
     </Provider>,
     document.getElementById('app')
 );