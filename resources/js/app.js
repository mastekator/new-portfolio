//React
import React from 'react'
import ReactDOM from 'react-dom';

//Third-party
import {BrowserRouter} from "react-router-dom";

//App
import Index from './index'

const application = (
    <BrowserRouter>
        <Index/>
    </BrowserRouter>
);

ReactDOM.render(application, document.getElementById('root'));
