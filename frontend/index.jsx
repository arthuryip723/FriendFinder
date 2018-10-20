import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './components/app'


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider><HashRouter><App/></HashRouter></Provider>,
        document.getElementById('root')
    );
});
