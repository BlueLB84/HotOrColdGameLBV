import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HotCold from './components/hot-cold';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HotCold />, document.getElementById('root'));
registerServiceWorker();
