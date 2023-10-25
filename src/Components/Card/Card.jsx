import React from 'react'
import styles from "./Card.module.css"
import CardImage from "../../assets/cardImage.png";


const Card = ({heading,clicked}) => {
  return (
    <div className={`${styles.container} ${clicked ? styles.clicked : ''}`}>
        <img src={CardImage} alt="card" className={styles.image}/>
        <div className={styles.heading}>
            {heading}
        </div>
        <div className={styles.content}>
        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</span>
        </div>
        <input type='button' value="Read More" className={styles.button}/>
    </div>
  )
}

export default Card