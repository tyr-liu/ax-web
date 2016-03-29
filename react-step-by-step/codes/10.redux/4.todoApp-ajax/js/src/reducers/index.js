'use strict';
import {REQUEST_FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR, SAVE_TODO, DESTROY_TODO, UPDATE_TEXT, TOGGLE_COMPLETE_ALL, TOGGLE_COMPLETE, DESTROY_COMPLETED, SELECT_FILTER} from '../actions';
import {SHOW_ALL} from '../constants';

const initState = {
    isFetching: false,
    allTodos: [],
    areAllComplete: true,
    selectedFilter: SHOW_ALL
};

export default function todo(state = initState, action){
    let allTodos, areAllComplete;
    switch(action.type) {
        case REQUEST_FETCH_TODO:
            return Object.assign({}, state, {isFetching: true});
        case FETCH_TODO_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                allTodos: action.todos,
                areAllComplete: _areAllComplete(action.todos)
            });
        case FETCH_TODO_ERROR:
            console.log(action.error);
            return Object.assign({}, state, {
                isFetching: false
            });
        case SAVE_TODO:
            let text = action.text;
            if (text.trim()) {
                const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
                allTodos = [...state.allTodos, {
                    id: id,
                    complete: false,
                    text: text
                }];
                return Object.assign({}, state, {
                    areAllComplete: false,
                    allTodos
                });
            } else {
                return state;
            }
        case DESTROY_TODO:
            allTodos = state.allTodos.filter(function (todo) {
                    return todo.id !== action.id;
                }
            );
            areAllComplete = _areAllComplete(allTodos);
            return Object.assign({}, state, {
                allTodos,
                areAllComplete
            });
        case UPDATE_TEXT:
            allTodos = state.allTodos.map(function (todo) {
                if (todo.id === action.id) {
                    todo.text = action.text;
                }
                return todo;
            });
            return Object.assign({}, state, {
                allTodos
            });
        case TOGGLE_COMPLETE_ALL:
            let complete = false;
            areAllComplete = _areAllComplete(state.allTodos);
            complete = !areAllComplete;
            allTodos = state.allTodos.map(function(todo) {
                todo.complete = complete;
                return todo;
            });
            return Object.assign({}, state, {
                allTodos
            });
        case TOGGLE_COMPLETE:
            allTodos = state.allTodos.map(function(todo){
                if(todo.id === action.todo.id){
                    todo.complete = !todo.complete;
                }
                return todo;
            });
            areAllComplete = _areAllComplete(allTodos);
            return Object.assign({}, state, {
                allTodos,
                areAllComplete
            });
        case DESTROY_COMPLETED:
            allTodos = state.allTodos.filter(function(todo){
                return todo.complete === false
            });
            areAllComplete = _areAllComplete(allTodos);
            return Object.assign({}, state, {
                allTodos,
                areAllComplete
            });
        case SELECT_FILTER:
            return Object.assign({}, state, {
                selectedFilter: action.filter
            });
        default:
            return state;
    }
};

function _areAllComplete(allTodos) {
    for (let id in allTodos) {
        if (!allTodos[id].complete) {
            return false;
        }
    }
    return true;
}