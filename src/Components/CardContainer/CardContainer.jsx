import React from 'react'
import Card from '../Card/Card'
import styles from "./CardContainer.module.css"

const CardContainer = () => {

  return (
    <div className={styles.CardContainer}>
        <h1 className={styles.heading}>Why Choose us?</h1>
        <div className={styles.container}>
            <Card heading={"98% Success Rate"}/>
            <Card heading={"100% Success Rate"} clicked />
            <Card heading={"100% Success Rate"}/>
        </div>
    </div>
  )
}

export default CardContainer