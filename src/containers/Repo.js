import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import '../styles/app.css';

const _ = require('lodash/core');


class Repo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            obj: {}
        };
    }

    static propTypes = {
        params: React.PropTypes.object,
    };

    componentDidMount() {
        console.log("hello");
        if(this.props.repos.length > 0) {
            this.setState({obj :  _.find(this.props.repos, { 'id': parseInt(this.props.match.params.id, 10) })});
        } else {
            this.props.actions.requestAPI();
        }
    }

    componentWillReceiveProps (props) {
        if(this.props.repos.length === 0) {
            this.state.obj =  _.find(props.repos, { 'id': parseInt(this.props.match.params.id, 10) });
        }
    }


    render() {
        const { full_name,description } = this.state.obj;
        if(Object.keys(this.state.obj).length === 0) {
            return (
                <div>
                    LOADING...
                </div>
            );
        }
        return (
            <div>
                <div>{full_name}</div>
                <div>{description}</div>
                <div><img src={this.state.obj.owner.avatar_url}/></div>
                <div><b>{this.state.obj.owner.login}</b></div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        repos: state.repos.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repo);
