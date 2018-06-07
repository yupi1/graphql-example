import React from 'react';
import './App.css';
import { Router } from "@reach/router";

//Components
import Login from './components/Login';

const App = () => (
  <div className="wrapper">
    <Router>
      <Login path="/" />
    </Router>
  </div>
);

export default App;