import React from 'react'
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css"
import InstaIcon from "../../assets/social media/instagramIcon.png"
import FacebookIcon from "../../assets/social media/facebookIcon.png"
import XIcon from "../../assets/social media/XIcon.png"
import PintrestIcon from "../../assets/social media/pintrestIcon.png"


const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footerContainer}>
            <div className={styles.logo}>
                <img src={logo} alt='logo'/>
                <span>IGSTUDIO</span>
            </div>
            <div className={styles.footerAction}>
                    <div>Home</div>
                    <div>Attorneys</div>
                    <div>Practice Areas</div>
                    <div>About us</div>
            </div>
            <div className={styles.icons}>
                <img src={InstaIcon} alt='Instagram' />
                <img src={FacebookIcon} alt='Facebook' />
                <img src={XIcon} alt='X' />
                <img src={PintrestIcon} alt='Pintrest' />
            </div>
        </div>
        <div className={styles.legal}>
            <p>© 2020 Acme. All rig</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
        </div>
    </div>
  )
}

export default Footer