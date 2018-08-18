import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Main /> 
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
