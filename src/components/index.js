import React from 'react'
import Navigation from './navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
export default props => 
    <div>
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </div>
