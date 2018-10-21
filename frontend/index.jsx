import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import App from './components/app';

const store = configureStore();

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider store={store}><HashRouter><App/></HashRouter></Provider>,
        document.getElementById('root')
    );
});
