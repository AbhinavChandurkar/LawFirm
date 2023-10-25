import React from 'react'
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css"



const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.logo}>
            <img src={logo} alt='logo'/>
            <span>IGSTUDIO</span>
        </div>
        <div className={styles.NavAction}>
            <div>Home</div>
            <div>Attorneys</div>
            <div>Practice Areas</div>
            <div>About us</div>
        </div>
        <div>
        <div className={styles.btn}>Contact Now</div>
        </div>
    </div>
  )
}

export default Navbar