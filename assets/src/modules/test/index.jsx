import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import './media/index.less';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('react-test-app'));
});
