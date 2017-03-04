import React from 'react';
import { browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/App.js';

const Greeting= () => {
  return <div>"hey there!"</div>;
};

export default (
  <Route history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="greet" component={Greeting}/>
    <Route path="greet2" component={Greeting}/>
    <Route path="greet3" component={Greeting}/>
  </Route>
);
