import React from 'react'
import styles from "./Card.module.css"


const Card = ({heading,clicked,userCard,CardImage,content}) => {
  return (
    <div className={`${styles.container} ${clicked ? styles.clicked : ''}`}>
        <img src={CardImage} alt="card" className={styles.image}/>
        <div className={styles.heading}>
            {heading}
        </div>
        {userCard && <div className={styles.subHeading}>CEO of Hunt</div>}
        <div className={styles.content}>
        <span>{content}</span>
        </div>
        {!userCard && <input type='button' value="Read More" className={styles.button}/>}
    </div>
  )
}

export default Card