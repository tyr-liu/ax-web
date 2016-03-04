/**
 * Created by rain on 2016/2/29.
 */
var TodoApp = React.createClass({

    getInitialState: function () {
        return todoState
    },

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },

    render: function () {
        return (
            <div>
                <Header onSave={this._onSave}/>
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                    updateText={this._updateText}
                    toggleCompleteAll={this._toggleCompleteAll}
                    toggleComplete={this._toggleComplete}
                    destroy={this._destroy}
                    selectedFilter={this.state.selectedFilter}
                />
                <Footer allTodos={this.state.allTodos}
                        destroyCompleted={this._destroyCompleted}
                        selectedFilter={this.state.selectedFilter}
                        onFilter={this._filter}
                />
            </div>
        );
    },


    _onChange: function () {
        this.setState(todoState);
    },

    _onSave: function (text) {
        if (text.trim()) {
            var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
            todoState.allTodos.push({
                id: id,
                complete: false,
                text: text
            });
            this.setState(todoState);
        }
    },

    _destroy: function (id) {
        todoState.allTodos = todoState.allTodos.filter(function (todo) {
                return todo.id !== id;
            }
        );
        todoState.areAllComplete = this._areAllComplete();
        this.setState(todoState);
    },

    _updateText: function (id, text) {
        todoState.allTodos = todoState.allTodos.map(function (todo) {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        this.setState(todoState);
    },

    _toggleCompleteAll: function () {
        var complete = false;
        todoState.areAllComplete = this._areAllComplete();
        complete = !todoState.areAllComplete;
        for (var key in todoState.allTodos) {
            todoState.allTodos[key].complete = complete;
        }
        this.setState(todoState);
    },

    _toggleComplete: function (todo) {
        todo.complete = !todo.complete;
        todoState.areAllComplete = this._areAllComplete();
        this.setState(todoState);
    },

    _areAllComplete: function () {
        for (var id in todoState.allTodos) {
            if (!todoState.allTodos[id].complete) {
                return false;
            }
        }
        return true;
    },

    _destroyCompleted: function () {
        for (var id in todoState.allTodos) {
            if (todoState.allTodos[id].complete) {
                delete todoState.allTodos[id];
            }
        }
        todoState.areAllComplete = this._areAllComplete();
        this.setState(todoState);
    },

    _filter: function (filter) {
        todoState.selectedFilter = filter;
        this.setState(todoState);
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todoapp')
);