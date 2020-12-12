import React, { useState, useParams } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import { atom, useRecoilState } from 'recoil'
import { createHtmlDataState } from '../globalstate/atom';
import Hr from './Hr';
import logo from '../static/peng1.png';

function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [htmlData, setHtmlData] = useRecoilState(createHtmlDataState)
    return (
        <div>
        <div className={styles.navbar}>
            {/* <Link to={{pathname:"https://www.kernel.org/doc/man-pages/"}}>
                <p>Official</p>
            </Link> */}
            <Link to={{ pathname: "https://www.kernel.org/doc/man-pages/" }} target="_blank"><p>Official</p></Link>

            {/* <a href="https://www.kernel.org/doc/man-pages/" target="_blank">Official</a> */}
            <Link to="/about">
                <p>About</p>
            </Link>
            <Link to="/favorites">
                <p>Favorites</p>
            </Link>
            <Link style={{float:"right"}} to="/">
                <p>Home</p>
            </Link>
            {loggedIn ? <Link style={{float:"right"}} to="/logout">
                <p>Logout</p>
            </Link> : null}

            {loggedIn ? null : <Link style={{float:"right"}} to="/login">
                <p>Login</p>
            </Link>}
            <p><img id="peng" src={logo}></img></p>
        </div>
        </div>
    )
}

export default Navbar;
