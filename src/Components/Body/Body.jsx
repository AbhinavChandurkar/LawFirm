import React from 'react'
import styles from "./Body.module.css"
import line from "../../assets/Line.png"
import practiseCard from "../../assets/practiseCard.png";
import CardContainer from '../CardContainer/CardContainer';
import UserCardContainer from '../CardContainer/UserCardContainer';

const Body = () => {
  return (
    <div>
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
      <CardContainer />
      <div className={styles.areaOfPractices}>
        <img src={practiseCard} alt="PractiseCard" />
      </div>
      <UserCardContainer />
    </div>
  )
}

export default Body