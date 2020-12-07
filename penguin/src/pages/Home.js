import React, { Component, useParams } from 'react';
import Navbar from '../components/Navbar'
import SearchData from '../components/SearchBar'   
import Hr from '../components/Hr'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Home = () => {
    return (
        <div>
            <Hr />
            <Navbar className="navbar" style={{paddingTop:"100px"}}/> 
            <SearchData />
        </div>
    )
}
export default Home
