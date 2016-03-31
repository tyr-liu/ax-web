import React from 'react';
import {connect} from 'react-redux';// 引入react-redux
import Header from '../component/Header';
import MainSection from '../component/MainSection';
import Footer from '../component/Footer';
import {fetchTodos, saveTodo, destroyTodo, updateText, toggleCompleteAll, toggleComplete, destroyCompleted, selectFilter} from '../actions';// 引入actionCreators

class TodoApp extends React.Component {
    static propTypes = {
        todoState: React.PropTypes.object.isRequired// 从store中映射的state tree
    };

    componentDidMount(){
        // 在组件元素加载完成时，触发FETCH_TODO action
        this.props.dispatch(fetchTodos());
    }

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
        this.props.dispatch(saveTodo(text));
    }

    _destroy(id) {
        this.props.dispatch(destroyTodo(id));
    };

    _updateText(id, text) {
        this.props.dispatch(updateText(id, text));
    }

    _toggleCompleteAll() {
        this.props.dispatch(toggleCompleteAll(this.props.todoState.areAllComplete));
    }

    _toggleComplete(todo) {
        this.props.dispatch(toggleComplete(todo));
    }

    _destroyCompleted() {
        this.props.dispatch(destroyCompleted());
    }

    _filter(filter) {        
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
