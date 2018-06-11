import React from 'react';
import { Router } from "@reach/router";

//Components
import Login from './components/Login';
import Registration from './components/Registration';

const App = () => (
  <div className="wrapper">
    <Router>
      <Login path="/" />
      <Registration path="signup" />
    </Router>
  </div>
);

export default App;