import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import Main from './pages/main/Main';
import Contacts from './pages/contacts/Contacts';
import AboutUs from './pages/about-us/AboutUs';
import Portfolio from './pages/portfolio/Portfolio';
import createBrowserHistory from './utils/history';
import createReduxStore from './redux';
import './index.scss';
import UpArrow from './components/up-arrow/UpArrow';

ReactDOM.render(
    <Provider store={createReduxStore}>
        <UpArrow />
        <Router history={createBrowserHistory}>
            <Switch>
                <Redirect exact from="/" to="/main" />
                <Route path="/main" component={Main} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/portfolio/:category" component={Portfolio} />
                <Route path="/about-us" component={AboutUs} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
