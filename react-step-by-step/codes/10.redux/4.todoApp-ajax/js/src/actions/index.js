'use strict';
import WebApi from '../utils/webapi';

// export const FETCH_TODO = 'FETCH_TODO';
export const REQUEST_FETCH_TODO = 'REQUEST_FETCH_TODO';
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS';
export const FETCH_TODO_ERROR = 'FETCH_TODO_ERROR';
export function fetchTodos() {
    //const todos = WebApi.get('/todos');
    // return {
    //     type: FETCH_TODO
    // }

    return dispatch => {
        dispatch({type: REQUEST_FETCH_TODO});

        WebApi.get('/todos')
            .then(data => dispatch({type: FETCH_TODO_SUCCESS, todos: data}))
            .catch(error => dispatch({type: FETCH_TODO_ERROR}));
    }
}

//export const SAVE_TODO = 'SAVE_TODO';
export const REQUEST_SAVE_TODO = 'REQUEST_SAVE_TODO';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_ERROR = 'SAVE_TODO_ERROR';
export function saveTodo(text) {
    return dispatch => {
        dispatch({type: REQUEST_SAVE_TODO});
        
        
    }
}

export const DESTROY_TODO = 'DESTROY_TODO';
export function destroyTodo(id) {
    return {
        type: DESTROY_TODO,
        id: id
    }
}

export const UPDATE_TEXT = 'UPDATE_TEXT';
export function updateText(id, text) {
    return {
        type: UPDATE_TEXT,
        id,
        text
    }
}

export const TOGGLE_COMPLETE_ALL = 'TOGGLE_COMPLETE_ALL';
export function toggleCompleteAll() {
    return {
        type: TOGGLE_COMPLETE_ALL
    }
}

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export function toggleComplete(todo) {
    return {
        type: TOGGLE_COMPLETE,
        todo
    }
}

export const DESTROY_COMPLETED = 'DESTROY_COMPLETED';
export function destroyCompleted() {
    return {
        type: DESTROY_COMPLETED
    }
}

export const SELECT_FILTER = 'SELECT_FILTER';
export function selectFilter(filter) {
    return {
        type: SELECT_FILTER,
        filter
    }
}