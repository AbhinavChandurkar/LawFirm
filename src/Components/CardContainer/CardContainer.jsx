import React from 'react'
import Card from '../Card/Card'
import styles from "./CardContainer.module.css"
import { successCardData } from '../../Data/Data'

const CardContainer = () => {

  return (
    <div className={styles.CardContainer}>
        <h1 className={styles.heading}>Why Choose us?</h1>
        <div className={styles.container}>
        {successCardData.map((data, index) => (
              <Card
                key={index}
                heading={data.title}
                CardImage={data.imageUrl}
                content={data.content}
                clicked={index === 1} 
                userCard={false}
              />
            ))}
        </div>
    </div>
  )
}

export default CardContainer