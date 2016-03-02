/**
 * Created by rain on 2016/2/29.
 */
class Header extends React.Component {
    render() {
        return (<header id="header">
            <h1>TODOs</h1>
            <TodoTextInput
                id="new-todo"
                placeholder="想干啥?"
                onSave={this.props.onSave}
            />
        </header>);
    }
}