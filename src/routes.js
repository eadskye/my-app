import React from 'react';
import { browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import Form from './components/form.js';
import Results from './components/results.js';
import About from './components/about.js';

const Greeting= () => {
  return <div>"hey there!"</div>;
};

export default (
  <Route history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="form" component={Form}/>
    <Route path="results" component={Results}/>
    <Route path="about" component={About}/>
  </Route>
);
