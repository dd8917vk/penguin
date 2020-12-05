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
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a style={{float:"right"}}href="#contact">Contact</a>
        </div>
        </>
    )
}

export default Navbar
