import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './Components/App/App';
import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
