/**
 * Created by rain on 2016/2/29.
 */
'use strict';

const ENTER_KEY_CODE = 13;

const SHOW_ALL = 'show_all';
const SHOW_COMPLETED = 'show_completed';
const SHOW_ACTIVE = 'show_active';


const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: (todo) => !todo.complete,
    [SHOW_COMPLETED]: (todo) => todo.complete
};

const FILTER_TITLES = {
    [SHOW_ALL]: '所有',
    [SHOW_ACTIVE]: '未完成',
    [SHOW_COMPLETED]: '已完成'
};

export {ENTER_KEY_CODE, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_FILTERS, FILTER_TITLES };