/**
 * Created by rain on 2016/2/29.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {ENTER_KEY_CODE, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_FILTERS, FILTER_TITLES } from '../constants';
import todoState from '../state';
import Header from '../component/Header';
import MainSection from '../component/MainSection';
import Footer from '../component/Footer';


export default class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = todoState;
    }

    render() {
        return (
            <div>
                <Header onSave={this._onSave.bind(this)}/>
                <MainSection
                    allTodos={todoState.allTodos}
                    areAllComplete={todoState.areAllComplete}
                    updateText={this._updateText.bind(this)}
                    toggleCompleteAll={this._toggleCompleteAll.bind(this)}
                    toggleComplete={this._toggleComplete.bind(this)}
                    destroy={this._destroy.bind(this)}
                    selectedFilter={todoState.selectedFilter}
                />
                <Footer allTodos={todoState.allTodos}
                        destroyCompleted={this._destroyCompleted.bind(this)}
                        selectedFilter={todoState.selectedFilter}
                        onFilter={this._filter.bind(this)}
                />
            </div>
        );
    }

    _onSave(text) {
        if (text.trim()) {
            let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
            todoState.allTodos.push({
                id: id,
                complete: false,
                text: text
            });
            todoState.areAllComplete = false;
            this.setState(todoState);
        }
    }

    _destroy(id) {
        todoState.allTodos = todoState.allTodos.filter(function (todo) {
                return todo.id !== id;
            }
        );
        todoState.areAllComplete = this._areAllComplete();
        this.setState(todoState);
    };

    _updateText(id, text) {
        todoState.allTodos = todoState.allTodos.map(function (todo) {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        this.setState(todoState);
    }

    _toggleCompleteAll() {
        let complete = false;
        todoState.areAllComplete = this._areAllComplete();
        complete = !todoState.areAllComplete;
        for (let key in todoState.allTodos) {
            todoState.allTodos[key].complete = complete;
        }
        this.setState(todoState);
    }

    _toggleComplete(todo) {
        todo.complete = !todo.complete;
        todoState.areAllComplete = this._areAllComplete();
        this.setState(todoState);
    }

    _areAllComplete() {
        for (let id in todoState.allTodos) {
            if (!todoState.allTodos[id].complete) {
                return false;
            }
        }
        return true;
    }

    _destroyCompleted() {
        for (let id in todoState.allTodos) {
            if (todoState.allTodos[id].complete) {
                delete todoState.allTodos[id];
            }
        }
        todoState.areAllComplete = this._areAllComplete();
        this.setState(todoState);
    }

    _filter(filter) {
        todoState.selectedFilter = filter;
        this.setState(todoState);
    }
}
