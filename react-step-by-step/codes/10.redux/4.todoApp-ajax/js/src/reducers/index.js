'use strict';
//import {REQUEST_FETCH_TODO, FETCH_TODO_SUCCESS, FETCH_TODO_ERROR, SAVE_TODO, DESTROY_TODO, UPDATE_TEXT, TOGGLE_COMPLETE_ALL, TOGGLE_COMPLETE, DESTROY_COMPLETED, SELECT_FILTER} from '../actions';
import * as actionTypes from '../actions';
import {SHOW_ALL} from '../constants';

const initState = {
    isFetching: false,
    allTodos: [],
    areAllComplete: true,
    selectedFilter: SHOW_ALL
};

export default function todo(state = initState, action){
    switch(action.type) {
        case actionTypes.REQUEST_FETCH_TODO:
            return Object.assign({}, state, {isFetching: true});
        case actionTypes.FETCH_TODO_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                allTodos: action.todos,
                areAllComplete: _areAllComplete(action.todos)
            });
        case actionTypes.FETCH_TODO_ERROR:
            console.log(action.error);
            return Object.assign({}, state, {
                isFetching: false
            });
        case actionTypes.REQUEST_SAVE_TODO:
        case actionTypes.SAVE_TODO_SUCCESS:
        case actionTypes.SAVE_TODO_ERROR:
        case actionTypes.REQUEST_DESTROY_TODO:
        case actionTypes.DESTROY_TODO_SUCCESS:
        case actionTypes.DESTROY_TODO_ERROR:
        case actionTypes.REQUEST_UPDATE_TEXT:
        case actionTypes.UPDATE_TEXT_SUCCESS:
        case actionTypes.UPDATE_TEXT_ERROR:
        case actionTypes.REQUEST_TOGGLE_COMPLETE_ALL:
        case actionTypes.TOGGLE_COMPLETE_ALL_SUCCESS:
        case actionTypes.TOGGLE_COMPLETE_ALL_ERROR:
        case actionTypes.REQUEST_TOGGLE_COMPLETE:
        case actionTypes.TOGGLE_COMPLETE_SUCCESS:
        case actionTypes.TOGGLE_COMPLETE_ERROR:
        case actionTypes.REQUEST_DESTROY_COMPLETED:
        case actionTypes.DESTROY_COMPLETED_SUCCESS:
        case actionTypes.DESTROY_COMPLETED_ERROR:
            // 暂时省略对这些action的处理，在后续文档中介绍简洁的统一处理方式
            return state;
        case actionTypes.SELECT_FILTER:
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