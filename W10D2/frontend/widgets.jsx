import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Clock from './clock';

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Root />, document.getElementById('main'));
});