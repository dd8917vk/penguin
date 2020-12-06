import React from 'react'
import styles from './Navbar.module.css'
function Navbar() {
    const alrt = () => {
        console.log('hello')
    }
    return (
        <>
        <div className={styles.navbar}>
            <a href="https://www.kernel.org/doc/man-pages/">Official</a>
            <a href="#news">About</a>
            <a href="#contact">Favorites</a>
            <a style={{float:"right"}}href="#contact">Home</a>
            <a style={{float:"right"}}href="#contact">Logout</a>
            <a style={{float:"right"}}href="#contact">Login</a>
        </div>
        </>
    )
}

export default Navbar
