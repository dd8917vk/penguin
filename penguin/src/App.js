import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Hr from './components/Hr'
import getData from './api/API'
import Searcher from './components/Searcher'
import SearchData from './components/SearchBar'
function App() {


  return (
    <div className="App">
     <Hr />
     <Navbar className="navbar" style={{paddingTop:"100px"}}/> 
     <SearchData />

    </div>
    
  );
}

export default App;
