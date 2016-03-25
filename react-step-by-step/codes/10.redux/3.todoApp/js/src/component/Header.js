/**
 * Created by rain on 2016/2/29.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoTextInput from './TodoTextInput';

export default class Header extends React.Component {
    render() {
        return (<header id="header">
            <h1>TODOs</h1>
            <TodoTextInput
                id="new-todo"
                placeholder="想干啥?"
                onSave={this.props.onSave}
            />
        </header>);
    }
}