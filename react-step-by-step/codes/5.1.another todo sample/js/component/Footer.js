/**
 * Created by rain on 2016/2/29.
 */
var Footer = React.createClass({

    propTypes: {
        allTodos: React.PropTypes.array.isRequired
    },

    render: function () {
        var allTodos = this.props.allTodos;
        var selectedFilter = this.props.selectedFilter;
        var total = Object.keys(allTodos).length;

        if (total === 0) {
            return null;
        }

        var completed = 0;
        for (var key in allTodos) {
            if (allTodos[key].complete) {
                completed++;
            }
        }

        var itemsLeft = total - completed;
        var itemsLeftPhrase = ' 项目 ';
        itemsLeftPhrase += '未完成';

        var clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button
                    id="clear-completed"
                    onClick={this._onClearCompletedClick}>
                    清除已完成条目 ({completed})
                </button>;
        }
        var onFilter = this.props.onFilter;

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
    },

    _onClearCompletedClick: function () {
        this.props.destroyCompleted();
    }

});
