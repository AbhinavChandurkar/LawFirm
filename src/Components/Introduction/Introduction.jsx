import React from 'react'
import styles from "./Introduction.module.css"
import line from "../../assets/Line.png"
const Introduction = () => {
  return (
    <div className={styles.container}>
        <div className={styles.header}>Lets Introduce <br/>Ourself</div>
        <img src={line} alt="line" className={styles.imgLine}/>
        <div className={styles.content}>
            <span className={styles.contetnHeading}>Criminal Lawyer</span>
            <br/>
            <span className={styles.contentText}>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequatduis
            enim velit mollit Exercitation.</span>
        </div>
  </div>
  )
}

export default Introduction