import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';

import Directory from './Directory';
import Brewery from './Brewery';

const App = () => (
  <Router>
      <div className="App">
        <header className="App-header">
          Brew Finder
        </header>
        <Switch>
          <Route path="/brewery/:id" component={Brewery} />
          <Route exact path="/" component={Directory} />
        </Switch>
      </div>
  </Router>
);


export default App;