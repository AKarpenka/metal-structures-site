import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main/Main';
import createReduxStore from './redux';
import './index.scss';

ReactDOM.render(
    <Provider store={createReduxStore}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
