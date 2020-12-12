import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ManualPage from './pages/ManualPage';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import Hr from './components/Hr'
//cat wines.json | heroku run --no-tty -a wineapi1983 -- python manage.py loaddata --format=json -
//http://quotes.stormconsultancy.co.uk/random.json


function App(props) {

  return (
    <div className="App">
      <Router>
        <Navbar className="navbar" style={{paddingTop:"100px"}}/>
        {/* change component to render to call function */}
        <Route exact path="/" component={Home} />
        <Route exact path="/manpage/:command" component={ManualPage} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
      </Router>
    </div>
    
  );
}

export default App;
