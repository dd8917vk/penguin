import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import ManualPage from './pages/ManualPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {


  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/:manpage" component={ManualPage} />
      </Router>
    </div>
    
  );
}

export default App;
