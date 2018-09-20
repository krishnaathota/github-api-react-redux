import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom'
import { history } from '../store/configureStore';
import { connect } from 'react-redux';

import Header from './Header';
import Home from './Home';
import Repo from './Repo';

class App extends React.Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <Header />

                    <div className="container">
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/repo/:id" component={ Repo }/>
                    </div>
                </div>
            </ConnectedRouter>
        );
    }
}

export default connect()(App);
