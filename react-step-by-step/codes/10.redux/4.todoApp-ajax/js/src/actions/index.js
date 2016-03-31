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
            .catch(error => dispatch({type: FETCH_TODO_ERROR, error}));
    }
}

//export const SAVE_TODO = 'SAVE_TODO';
export const REQUEST_SAVE_TODO = 'REQUEST_SAVE_TODO';
export const SAVE_TODO_SUCCESS = 'SAVE_TODO_SUCCESS';
export const SAVE_TODO_ERROR = 'SAVE_TODO_ERROR';
export function saveTodo(text) {
    return dispatch => {
        dispatch({type: REQUEST_SAVE_TODO});

        WebApi.post('/todos', {text: text, complete: false})
            .then(_=> dispatch({type: SAVE_TODO_SUCCESS}))
            .catch(error=> dispatch({type: SAVE_TODO_ERROR, error}))
            .then(_=> dispatch(fetchTodos()));
    }
}

//export const DESTROY_TODO = 'DESTROY_TODO';
export const REQUEST_DESTROY_TODO = 'REQUEST_DESTROY_TODO';
export const DESTROY_TODO_SUCCESS = 'DESTROY_TODO_SUCCESS';
export const DESTROY_TODO_ERROR = 'DESTROY_TODO_ERROR';
export function destroyTodo(id) {
    return dispatch => {
        dispatch({type: REQUEST_DESTROY_TODO});

        WebApi.delete(`/todos/${id}`)
            .then(_=> dispatch({type: DESTROY_TODO_SUCCESS}))
            .catch(error=> dispatch({type: DESTROY_TODO_ERROR, error}))
            .then(_=> dispatch(fetchTodos()));
    }
}

//export const UPDATE_TEXT = 'UPDATE_TEXT';
export const REQUEST_UPDATE_TEXT = 'REQUEST_UPDATE_TEXT';
export const UPDATE_TEXT_SUCCESS = 'UPDATE_TEXT_SUCCESS';
export const UPDATE_TEXT_ERROR = 'UPDATE_TEXT_ERROR';
export function updateText(id, text) {
    return dispatch => {
        dispatch({type: REQUEST_UPDATE_TEXT});

        WebApi.put(`/todos/${id}`, {text: text})
            .then(_=> dispatch({type: UPDATE_TEXT_SUCCESS}))
            .catch(error => dispatch({type: UPDATE_TEXT_ERROR, error}))
            .then(_=> dispatch(fetchTodos()));
    }
}

//export const TOGGLE_COMPLETE_ALL = 'TOGGLE_COMPLETE_ALL';
export const REQUEST_TOGGLE_COMPLETE_ALL = 'REQUEST_TOGGLE_COMPLETE_ALL';
export const TOGGLE_COMPLETE_ALL_SUCCESS = 'TOGGLE_COMPLETE_ALL_SUCCESS';
export const TOGGLE_COMPLETE_ALL_ERROR = 'TOGGLE_COMPLETE_ALL_ERROR';
export function toggleCompleteAll(areAllComplete) {
    return dispatch => {
        dispatch({type: REQUEST_TOGGLE_COMPLETE_ALL});

        WebApi.put('/todos', {complete: !areAllComplete})
            .then(_=>dispatch({type: TOGGLE_COMPLETE_ALL_SUCCESS}))
            .catch(error=> dispatch({type: TOGGLE_COMPLETE_ALL_ERROR, error}))
            .then(_=> dispatch(fetchTodos()));
    }
}

//export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const REQUEST_TOGGLE_COMPLETE = 'REQUEST_TOGGLE_COMPLETE';
export const TOGGLE_COMPLETE_SUCCESS = 'TOGGLE_COMPLETE_SUCCESS';
export const TOGGLE_COMPLETE_ERROR = 'TOGGLE_COMPLETE_ERROR';
export function toggleComplete(todo) {
    return dispatch => {
        dispatch({type: REQUEST_TOGGLE_COMPLETE});

        WebApi.put(`/todos/${todo.id}`, {complete: !todo.complete})
            .then(_=>dispatch({type: TOGGLE_COMPLETE_SUCCESS}))
            .catch(error=> dispatch({type: TOGGLE_COMPLETE_ERROR, error}))
            .then(_=> dispatch(fetchTodos()));
    }
}

//export const DESTROY_COMPLETED = 'DESTROY_COMPLETED';
export const REQUEST_DESTROY_COMPLETED = 'REQUEST_DESTROY_COMPLETED';
export const DESTROY_COMPLETED_SUCCESS = 'DESTROY_COMPLETED_SUCCESS';
export const DESTROY_COMPLETED_ERROR = 'DESTROY_COMPLETED_ERROR';
export function destroyCompleted() {
    return dispatch => {
        dispatch({type: REQUEST_DESTROY_COMPLETED});

        WebApi.delete('/todos?complete=1')
            .then(_=>dispatch({type: DESTROY_COMPLETED_SUCCESS}))
            .catch(error=> dispatch({type: DESTROY_COMPLETED_ERROR, error}))
            .then(_=> dispatch(fetchTodos()));
    }
}

export const SELECT_FILTER = 'SELECT_FILTER';
export function selectFilter(filter) {
    return {
        type: SELECT_FILTER,
        filter
    }
}