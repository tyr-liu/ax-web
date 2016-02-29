/**
 * Created by rain on 2016/2/29.
 */
var app = app || {};

(function () {
    var TodoApp = React.createClass({

        getInitialState: function () {
            return state
        },

        componentDidMount: function () {
        },

        componentWillUnmount: function () {
        },

        /**
         * @return {object}
         */
        render: function () {
            state.areAllComplete = this._areAllComplete();
            return (
                <div>
                    <app.Header onSave={this._onSave}/>
                    <app.MainSection
                        allTodos={this.state.allTodos}
                        areAllComplete={this.state.areAllComplete}
                        updateText={this._updateText}
                        toggleCompleteAll={this._toggleCompleteAll}
                        toggleComplete={this._toggleComplete}
                        destroy={this._destroy}
                        selectedFilter={this.state.selectedFilter}
                    />
                    <app.Footer allTodos={this.state.allTodos}
                            destroyCompleted={this._destroyCompleted}
                            selectedFilter={this.state.selectedFilter}
                            onFilter={this._filter}
                    />
                </div>
            );
        },



        _onChange: function () {
            this.setState(state);
        },

        _onSave: function (text) {
            if (text.trim()) {
                var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
                state.allTodos.push({
                    id: id,
                    complete: false,
                    text: text
                });
                this.setState(state);
            }
        },

        _destroy: function (id) {
            state.allTodos = state.allTodos.filter(function(todo){
                    return todo.id !== id;
                }
            );
            this.setState(state);
        },

        _updateText: function (id, text) {
            state.allTodos = state.allTodos.map(function(todo){
                if(todo.id === id){
                    todo.text = text;
                }
                return todo;
            });
            this.setState(state);
        },

        _toggleCompleteAll: function () {
            var complete = false;
            complete = !this._areAllComplete();
            for (var key in state.allTodos) {
                state.allTodos[key].complete = complete;
            }
            this.setState(state);
        },

        _toggleComplete: function (todo) {
            todo.complete = !todo.complete;
            this.setState(state);
        },

        _areAllComplete: function () {
            for (var id in state.allTodos) {
                if (!state.allTodos[id].complete) {
                    return false;
                }
            }
            return true;
        },

        _destroyCompleted: function () {
            for (var id in state.allTodos) {
                if (state.allTodos[id].complete) {
                    delete state.allTodos[id];
                }
            }
            this.setState(state);
        },

        _filter: function (filter) {
            state.selectedFilter = filter;
            this.setState(state);
        }
    });

    ReactDOM.render(
        <TodoApp />,
        document.getElementById('todoapp')
    );

})();