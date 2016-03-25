/**
 * Created by rain on 2016/2/29.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TodoTextInput from './TodoTextInput';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    render() {
        let todo = this.props.todo;

        let input;
        if (this.state.isEditing) {
            input =
                <TodoTextInput
                    className="edit"
                    onSave={this._onUpdateText.bind(this)}
                    value={todo.text}
                />;
        }

        let className = {
            'completed': todo.complete,
            'editing': this.state.isEditing
        };
        let classes = [];

        let hasOwn = {}.hasOwnProperty;

        for (let key in className) {
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
                        onChange={this._onToggleComplete.bind(this)}
                    />
                    <label onDoubleClick={this._onDoubleClick.bind(this)}>
                        {todo.text}
                    </label>
                    <button className="destroy" onClick={this._onDestroyClick.bind(this)}/>
                </div>
                {input}
            </li>
        );
    }

    _onToggleComplete() {
        this.props.toggleComplete(this.props.todo);
    }

    _onDoubleClick() {
        this.setState({isEditing: true});
    }


    _onUpdateText(text) {
        this.props.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    }

    _onDestroyClick() {
        this.props.destroy(this.props.todo.id);
    }
}

TodoItem.propTypes =
{
    todo: React.PropTypes.object.isRequired
};
