/**
 * Created by rain on 2016/2/29.
 */
class Footer extends React.Component {

    render() {
        let allTodos = this.props.allTodos;
        let selectedFilter = this.props.selectedFilter;
        let total = Object.keys(allTodos).length;

        if (total === 0) {
            return null;
        }

        let completed = 0;
        for (let key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        let itemsLeft = total - completed;
        let itemsLeftPhrase = ' 项目 ';
        itemsLeftPhrase += '未完成';

        let clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this._onClearCompletedClick.bind(this)}>
                    清除已完成条目 ({completed})
                </button>;
        }
        let onFilter = this.props.onFilter;

        return (
            <footer id="footer">
                              <span id="todo-count">
                              <strong>
                                  {itemsLeft}
                              </strong>
                                  {itemsLeftPhrase}
                              </span>
                <ul className="filters">
                    {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
                        <li key={filter}>
                            <a className={ filter === selectedFilter?'selected':'' }
                               style={{ cursor: 'pointer' }}
                               onClick={function(){onFilter(filter);}}>
                                {FILTER_TITLES[filter]}
                            </a>
                        </li>
                    )}
                </ul>
                {clearCompletedButton}
            </footer>
        );
    }

    _onClearCompletedClick() {
        this.props.destroyCompleted();
    }

}

Footer.propTypes = {
    allTodos: React.PropTypes.array.isRequired
};
