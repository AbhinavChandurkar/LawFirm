import React, { useState } from 'react';
import Card from '../Card/Card';
import styles from "./UserCardContainer.module.css";
import { userCardData } from '../../Data/Data';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const UserCardContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const nextCards = () => {
    //Checking if the selectedCard is on 2 index which means we can travers left or right
    if (currentIndex < userCardData.length - 3 && selectedCardIndex === 2) {
      //moving to next card
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
    //Checkign if we are not on the last card as if we are on the last card we dont need to move 
    setSelectedCardIndex(prevIndex => prevIndex < 2 ? prevIndex + 1 : prevIndex);
  };

  const prevCards = () => {
    //checking if we are not 0 index as we cant go previous of that
    if (currentIndex > 0 && selectedCardIndex === 0) {
      //moving to previous card
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
    //Checkign if we are not on the first card as if we are on the first card we dont need to move 
    setSelectedCardIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
  };

  //We are taking the card which need to be displayed from the main data
  const visibleData = userCardData.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.CardContainer}>
      <div className={styles.heading}>
        <div className={styles.conntent}>
          <span>What says our</span><br/> 
          <span>happy Clients</span>
        </div>
        <div>
          <img
            src={leftArrow}
            alt="leftArrow"
            onClick={prevCards}
            className={currentIndex === 0 ? styles.disabledArrow : ''}
          />
          <img
            src={rightArrow}
            alt="rightArrow"
            onClick={nextCards}
            className={currentIndex >= userCardData.length - 3 ? styles.disabledArrow : ''}
          />
        </div>
      </div>
      <div className={styles.container}>
        {visibleData.map((data, index) => (
          <Card
            key={index}
            heading={data.name}
            CardImage={data.imageUrl}
            content={data.content}
            clicked={index === selectedCardIndex} 
            userCard={true}
          />
        ))}
      </div>
    </div>
  );
}

export default UserCardContainer;
