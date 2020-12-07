import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import ManualPage from './pages/ManualPage'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";



function App(props) {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/manpage/:command" component={ManualPage} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/favorites" component={Home} />
      </Router>
    </div>
    
  );
}

export default App;
