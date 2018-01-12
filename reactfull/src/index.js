import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TODO from './new/new';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
