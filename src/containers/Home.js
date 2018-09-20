import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import ReposList from '../components/ReposList';
import '../styles/app.css';

class Home extends React.Component {
    componentDidMount() {
        console.log('-- Network Call Initiated');
        this.props.actions.requestAPI();
    }

    render() {
        return (
            <div>
                <ReposList repos = {this.props.repos}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
