/**
 * Created by liu.xinyi
 * on 2016/3/24.
 */
'use strict';

import React, {Component, PropTypes} from 'react';

class Writer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    onChangeHandle = e => {
        const text = e.target.value;
        const {onChange} = this.props;
        this.setState({input: text});
        onChange(text);
    };

    render() {
        const {value} = this.props;
        return (
            <div>
                <input value={this.state.input} onChange={this.onChangeHandle}/>
                <p>{value}</p>
            </div>
        )
    }
}

export default Writer;