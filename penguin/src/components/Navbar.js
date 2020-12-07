import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
function Navbar() {

    const [loggedIn, setLoggedIn] = useState(false)
    console.log(loggedIn)
    return (
        <>
        <div className={styles.navbar}>
            <a href="https://www.kernel.org/doc/man-pages/">Official</a>
            <Link to="/manpage">
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
        </div>
        </>
    )
}

export default Navbar
