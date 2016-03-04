/**
 * Created by rain on 2016/2/29.
 */

var TodoItem = React.createClass({

    propTypes: {
        todo: React.PropTypes.object.isRequired
    },

    getInitialState: function () {
        return {
            isEditing: false
        };
    },

    render: function () {
        var todo = this.props.todo;

        var input;
        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={this._onUpdateText}
                    value={todo.text}
                />;
        }

        var className = {
            'completed': todo.complete,
            'editing': this.state.isEditing
        };
        var classes = [];

        var hasOwn = {}.hasOwnProperty;

        for (var key in className) {
            if (hasOwn.call(className, key) && className[key]) {
                classes.push(key);
            }
        }


        return (
            <li
                className={classes.join(' ')}
                key={todo.id}>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.complete}
                        onChange={this._onToggleComplete}
                    />
                    <label onDoubleClick={this._onDoubleClick}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={this._onDestroyClick}/>
                </div>
                {input}
            </li>
        );
    },

    _onToggleComplete: function () {
        this.props.toggleComplete(this.props.todo);
    },

    _onDoubleClick: function () {
        this.setState({isEditing: true});
    },

    _onUpdateText: function (text) {
        this.props.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    },

    _onDestroyClick: function () {
        this.props.destroy(this.props.todo.id);
    }
});