import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Recipeapplication from './Recipeapplication';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Recipeapplication />, document.getElementById('root'));
registerServiceWorker();
    