import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/components/App.js';
const Greeting= () => {
  return <div>"hey there!"</div>;
};

export default (
  <div>
  <Route path="/" component={App}/>
  <Route path="greet" component={Greeting}/>
  <Route path="greet2" component={Greeting}/>
  <Route path="greet3" component={Greeting}/>

  </div>
)
