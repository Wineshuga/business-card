import React from 'react'
import CallImage from "../Assets/callImage.png"
import styles from "./gridrecord.module.scss"

const GridRecord = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.filename}>
        <img src={CallImage} alt="" />
        <div className={styles.filename__text}>
            <h5>{props.name}</h5>
            <p className={styles.paragraph}>{props.lenght}</p>
        </div>
      </div>
      <div className={styles.analysis}>
        <h5>{props.analysis}</h5>
        <p className={styles.paragraph}>{props.date}</p>
      </div>
    </div>
  )
}

export default GridRecord
