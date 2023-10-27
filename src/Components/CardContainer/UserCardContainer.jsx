import React from 'react'
import Card from '../Card/Card'
import styles from "./UserCardContainer.module.css"
import { userCardData } from '../../Data/Data'
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

const UserCardContainer = () => {
  
  return (
    <div className={styles.CardContainer}>
      <div className={styles.heading}>
        <div className={styles.conntent}>
          <span>What says our</span><br/> 
          <span>happy Clients</span>
        </div>
        <div>
          <img src={leftArrow} alt="leftArrow" />
          <img src={rightArrow} alt="rightArrow" />
        </div>
      </div>
        <div className={styles.container}>
        {userCardData.map((data, index) => (
              <Card
                key={index}
                heading={data.name}
                CardImage={data.imageUrl}
                content={data.content}
                clicked={index === 1} 
                userCard={true}
              />
            ))}
        </div>
    </div>
  )
}

export default UserCardContainer;