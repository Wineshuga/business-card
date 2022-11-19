import React from 'react'
import styles from './list.module.scss'
import image from '../Assets/callImage.png'

const List = (props) => {
  return (
    <div className={styles.listbox}>
      <div className={styles.record}>
        <ul>
          <li className={styles.record__list}>
            <div className={styles.checkbox}><input type="checkbox" name="file" id="" /></div>
            <div className={styles.record__content}>
            <div className={styles.record__image_div}><img className={styles.image} src={image} alt="" /><h4>{props.name}</h4></div>
            <p className={styles.paragraph}>{props.agent}</p>
            <h4>{props.analysis}</h4>
            <p className={styles.paragraph}>{props.date} {props.time}</p>
            <p className={styles.paragraph}>{props.lenght}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default List
