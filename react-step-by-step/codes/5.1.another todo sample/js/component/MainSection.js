/**
 * Created by rain on 2016/2/29.
 */
var MainSection = React.createClass({

    propTypes: {
        allTodos: React.PropTypes.array.isRequired,
        areAllComplete: React.PropTypes.bool.isRequired
    },

    render: function () {
        if (Object.keys(this.props.allTodos).length < 1) {
            return null;
        }

        var allTodos = this.props.allTodos.filter(TODO_FILTERS[this.props.selectedFilter]);
        var todos = [];

        for (var key in allTodos) {
            todos.push(<TodoItem key={key} todo={allTodos[key]}
                                 updateText={this.props.updateText}
                                 toggleComplete={this.props.toggleComplete}
                                 destroy={this.props.destroy}/>);
        }

        return (
            <section id="main">
                <input
                    id="toggle-all"
                    type="checkbox"
                    onChange={this._onToggleCompleteAll}
                    checked={this.props.areAllComplete ? 'checked' : ''}
                />
                <ul id="todo-list">{todos}</ul>
            </section>);
    },

    _onToggleCompleteAll: function () {
        this.props.toggleCompleteAll();
    }

});