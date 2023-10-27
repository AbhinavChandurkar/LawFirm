import React from 'react'
import BasicAccordion from '../Accordian/Accordian'
import {accordainData} from "../../Data/Data";
import styles from "./faq.module.css"
const Faq = () => {
  return (
    <div className={styles.container}>
        <div className={styles.headingContainer}>
            <p className={styles.heading}>FAQ</p>
            <p className={styles.subTitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        </div>
        <div className={styles.accordainContainer}>
            <BasicAccordion data={accordainData}/>
        </div>
    </div>
  )
}

export default Faq