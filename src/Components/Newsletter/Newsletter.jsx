import React from 'react'
import styles from './Newsletter.module.css'
const Newsletter = () => {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.heading}>
                <p className={styles.headingContent}>Subscribe Our Newsletter</p>
            </div>
            <div className="input">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className={styles.inputField} 
                />
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className={styles.inputField} 
                />
                <button className={styles.sendButton}>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter