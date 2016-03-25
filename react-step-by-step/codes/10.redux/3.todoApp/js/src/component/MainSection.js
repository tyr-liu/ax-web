/**
 * Created by rain on 2016/2/29.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import TodoItem from './TodoItem';
import {TODO_FILTERS} from '../constants';

export default class MainSection extends React.Component{

    render(){
        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        let allTodos = this.props.allTodos.filter(TODO_FILTERS[this.props.selectedFilter]);
        let todos = [];

        for (let key in allTodos) {
            todos.push(<TodoItem key={key} todo={allTodos[key]}
                                     updateText={this.props.updateText}
                                     toggleComplete={this.props.toggleComplete}
                                     destroy={this.props.destroy}/>);
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteAll.bind(this)}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                />
                <ul id="todo-list">{todos}</ul>
            </section>);
    }

    _onToggleCompleteAll(){
        this.props.toggleCompleteAll();
    }

}

MainSection.propTypes = {
    allTodos: React.PropTypes.array.isRequired,
    areAllComplete: React.PropTypes.bool.isRequired
};