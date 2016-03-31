import React from 'react';
import {ENTER_KEY_CODE, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TODO_FILTERS, FILTER_TITLES } from '../constants';
//import todoState from '../state';// 拿掉state，使用redux的store替代
import {connect} from 'react-redux';// 引入react-redux
import Header from '../component/Header';
import MainSection from '../component/MainSection';
import Footer from '../component/Footer';
import {saveTodo, destroyTodo, updateText, toggleCompleteAll, toggleComplete, destroyCompleted, selectFilter} from '../actions';// 引入actionCreators

class TodoApp extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = todoState;
    //}

    static propTypes = {
        todoState: React.PropTypes.object.isRequired// 从store中映射的state tree
    };

    render() {
        const {todoState} = this.props;
        return (
            <div>/
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
        //if (text.trim()) {
        //    let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        //    todoState.allTodos.push({
        //        id: id,
        //        complete: false,
        //        text: text
        //    });
        //    todoState.areAllComplete = false;
        //    this.setState(todoState);
        //}
        // 使用props中注入的dispatch，向store发送action
        this.props.dispatch(saveTodo(text));
    }

    _destroy(id) {
        //todoState.allTodos = todoState.allTodos.filter(function (todo) {
        //        return todo.id !== id;
        //    }
        //);
        //todoState.areAllComplete = this._areAllComplete();
        //this.setState(todoState);
        this.props.dispatch(destroyTodo(id));
    };

    _updateText(id, text) {
        //todoState.allTodos = todoState.allTodos.map(function (todo) {
        //    if (todo.id === id) {
        //        todo.text = text;
        //    }
        //    return todo;
        //});
        //this.setState(todoState);
        this.props.dispatch(updateText(id, text));
    }

    _toggleCompleteAll() {
        //let complete = false;
        //todoState.areAllComplete = this._areAllComplete();
        //complete = !todoState.areAllComplete;
        //for (let key in todoState.allTodos) {
        //    todoState.allTodos[key].complete = complete;
        //}
        //this.setState(todoState);
        this.props.dispatch(toggleCompleteAll());
    }

    _toggleComplete(todo) {
        //todo.complete = !todo.complete;
        //todoState.areAllComplete = this._areAllComplete();
        //this.setState(todoState);
        this.props.dispatch(toggleComplete(todo));
    }

    //_areAllComplete() {
    //    for (let id in todoState.allTodos) {
    //        if (!todoState.allTodos[id].complete) {
    //            return false;
    //        }
    //    }
    //    return true;
    //}

    _destroyCompleted() {
        //for (let id in todoState.allTodos) {
        //    if (todoState.allTodos[id].complete) {
        //        delete todoState.allTodos[id];
        //    }
        //}
        //todoState.areAllComplete = this._areAllComplete();
        //this.setState(todoState);
        this.props.dispatch(destroyCompleted());
    }

    _filter(filter) {
        //todoState.selectedFilter = filter;
        //this.setState(todoState);
        this.props.dispatch(selectFilter(filter));
    }
}

// 将store的state tree映射为组件的props
function mapStateToProps(state) {
    return {
        todoState: state
    }
}

// 将store中的state tree映射到TodoApp的props中
export default connect(mapStateToProps)(TodoApp);