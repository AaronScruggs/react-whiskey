import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import TagList from './components/TagList/TagList.jsx';
import AppContainer from './components/AppContainer/AppContainer.jsx';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
