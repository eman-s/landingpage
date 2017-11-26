import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseLayout from './components/BaseLayout';
import registerServiceWorker from './registerServiceWorker'
import Home from './components/Home'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/'component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
