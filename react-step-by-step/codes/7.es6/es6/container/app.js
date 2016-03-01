/**
 * Created by rain on 2016/2/29.
 */
class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = initstate;
    }

    render() {
        this.state.areAllComplete = this._areAllComplete();
        return (
            <div>
                <Header onSave={this._onSave.bind(this)}/>
                <MainSection
                    allTodos={this.state.allTodos}
                    areAllComplete={this.state.areAllComplete}
                    updateText={this._updateText.bind(this)}
                    toggleCompleteAll={this._toggleCompleteAll.bind(this)}
                    toggleComplete={this._toggleComplete.bind(this)}
                    destroy={this._destroy.bind(this)}
                    selectedFilter={this.state.selectedFilter}
                />
                <Footer allTodos={this.state.allTodos}
                        destroyCompleted={this._destroyCompleted.bind(this)}
                        selectedFilter={this.state.selectedFilter}
                        onFilter={this._filter.bind(this)}
                />
            </div>
        );
    }

    _onChange() {
        this.setState(this.state);
    }

    _onSave(text) {
        if (text.trim()) {
            let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
            this.state.allTodos.push({
                id: id,
                complete: false,
                text: text
            });
            this.setState(this.state);
        }
    }

    _destroy(id) {
        this.state.allTodos = this.state.allTodos.filter(function (todo) {
                return todo.id !== id;
            }
        );
        this.setState(this.state);
    };

    _updateText(id, text) {
        this.state.allTodos = this.state.allTodos.map(function (todo) {
            if (todo.id === id) {
                todo.text = text;
            }
            return todo;
        });
        this.setState(this.state);
    }

    _toggleCompleteAll() {
        let complete = false;
        complete = !this._areAllComplete();
        for (let key in this.state.allTodos) {
            this.state.allTodos[key].complete = complete;
        }
        this.setState(this.state);
    }

    _toggleComplete(todo) {
        todo.complete = !todo.complete;
        this.setState(this.state);
    }

    _areAllComplete() {
        for (let id in this.state.allTodos) {
            if (!this.state.allTodos[id].complete) {
                return false;
            }
        }
        return true;
    }

    _destroyCompleted() {
        for (let id in this.state.allTodos) {
            if (this.state.allTodos[id].complete) {
                delete this.state.allTodos[id];
            }
        }
        this.setState(this.state);
    }

    _filter(filter) {
        this.state.selectedFilter = filter;
        this.setState(this.state);
    }
}


(function () {
    ReactDOM.render(
        <TodoApp />,
        document.getElementById('todoapp')
    );
})();