import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Post from './Components/Post/post'
import { BrowserRouter as Router, Route } from 'react-router-dom';

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/post" component={Post} />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
