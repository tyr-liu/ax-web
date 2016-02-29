/**
 * Created by rain on 2016/2/29.
 */

var ENTER_KEY_CODE = 13;

var SHOW_ALL = 'show_all';
var SHOW_COMPLETED = 'show_completed';
var SHOW_ACTIVE = 'show_active';


var TODO_FILTERS = {
    [SHOW_ALL]: function () {
        return true;
    },
    [SHOW_ACTIVE]: function (todo) {
        return !todo.complete;
    },
    [SHOW_COMPLETED]: function (todo) {
        return todo.complete;
    }
};

var FILTER_TITLES = {
    [SHOW_ALL]: '所有',
    [SHOW_ACTIVE]: '未完成',
    [SHOW_COMPLETED]: '已完成'
};