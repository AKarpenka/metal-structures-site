import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Main from './components/main/Main';
import createBrowserHistory from './utils/history';
import createReduxStore from './redux';
import './index.scss';

ReactDOM.render(
    <Provider store={createReduxStore}>
        <Router history={createBrowserHistory}>
            <Switch>
                <Redirect exact from="/" to="/main" />
                <Route path="/main" component={Main} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
