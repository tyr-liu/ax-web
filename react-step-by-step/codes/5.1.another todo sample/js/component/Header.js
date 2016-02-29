/**
 * Created by rain on 2016/2/29.
 */
var app = app || {};

(function () {
    var Header = React.createClass({
        render: function () {
            return (<header id="header">
                <h1>TODOs</h1>
                <app.TodoTextInput
                    id="new-todo"
                    placeholder="想干啥?"
                    onSave={this.props.onSave}
                />
            </header>);
        }
    });
    app.Header = Header;
})();