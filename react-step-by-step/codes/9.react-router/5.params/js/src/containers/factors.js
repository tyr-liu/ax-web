/**
 * User: liuxinyi/liu.xinyi@free-sun.com.cn
 * Date: 2016/3/10
 * Time: 16:42
 *
 */
'use strict';
import React from 'react';
import {Link} from 'react-router';
import State from '../state';
import FactorSelector from './factors/factor-selector';

class Factors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            factors: State.factors
        };
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    renderTab = ()=> {
        let idInRouteParams = Number(this.props.params.id);
        console.log(idInRouteParams);
        return (
            this.state.factors.map(f=> {
                return (
                    <li className={f.id === idInRouteParams ? 'active': ''}>
                        <Link key={f.id} to={`/factors/${f.id}`}>{f.name}</Link>
                    </li>)
            })
        );
    };

    redirectDefault = (props)=> {
        if (!props.params.id && this.state.factors && this.state.factors.length > 0) {
            this.context.router.push(`/factors/${this.state.factors[0].id}`);
        }
    };

    componentDidMount() {
        this.redirectDefault(this.props);
    }

    componentWillReceiveProps(props) {
        this.redirectDefault(props);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <ul className="nav nav-tabs">
                        {this.renderTab()}
                    </ul>
                    <div className="tab-content">
                        {this.props.children}
                    </div>

                </div>
            </div>
        );
    }
}

export default Factors;