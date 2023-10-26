import React from 'react';
import styles from "./TeamMember.module.css";

const TeamMember = ({ name, imageUrl, cases ,highlighted}) => {
  return (
    <div className={`${styles.memberContainer} ${highlighted ? styles.highlighted : ''}`}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.cases}>{`${cases} cases`}</p>
      </div>
    </div>
  );
}

export default TeamMember;
