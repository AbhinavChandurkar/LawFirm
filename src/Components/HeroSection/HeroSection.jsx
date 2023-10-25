import React from 'react'
import styles from '../HeroSection/HeroSection.module.css';
import { Email} from '@mui/icons-material';
import heroImage from "../../assets/heroImage.png"

const HeroSection = () => {
  return (

    <div className={styles.heroContainer}>
        <div className={styles.content}>
            <h1>You don’t have to <br/> Fight them Alone.</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</span>
            <div className={styles.emailSection}>
              <div className="iconContainer">
                <Email className={styles.icon} />
                <input type='text' placeholder='Enter your email' className={styles.emailInput}/>
              </div>
                <input type='button' value="Let's Talk" className={styles.emailBtn} />
            </div>
        </div>
        <div className={styles.imageSection}>
            <img src={heroImage} alt="heroImage" />
        </div>
    </div>
  )
}

export default HeroSection