'use strict';
export const SAVE_TODO = 'SAVE_TODO';
export function saveTodo(text){
    return {
        type: SAVE_TODO,
        text: text
    }
}

export const DESTROY_TODO = 'DESTROY_TODO';
export function destroyTodo(id){
    return {
        type: DESTROY_TODO,
        id: id
    }
}

export const UPDATE_TEXT =  'UPDATE_TEXT';
export function updateText(id, text){
    return {
        type: UPDATE_TEXT,
        id,
        text
    }
}

export const TOGGLE_COMPLETE_ALL = 'TOGGLE_COMPLETE_ALL';
export function toggleCompleteAll(){
    return {
        type: TOGGLE_COMPLETE_ALL
    }
}

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export function toggleComplete(todo){
    return {
        type: TOGGLE_COMPLETE,
        todo
    }
}

export const DESTROY_COMPLETED = 'DESTROY_COMPLETED';
export function destroyCompleted(){
    return {
        type: DESTROY_COMPLETED
    }
}

export const SELECT_FILTER = 'SELECT_FILTER';
export function selectFilter(filter){
    return {
        type: SELECT_FILTER,
        filter
    }
}