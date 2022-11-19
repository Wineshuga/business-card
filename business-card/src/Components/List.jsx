import React from 'react'
import styles from './list.module.scss'
import image from '../Assets/callImage.png'

const List = (props) => {
  return (
    <div className={styles.listbox}>
      <table className={styles.table}>
        <tr>
          <td><input type="checkbox" name="file" id="" /></td>
          <td><div className={styles.record__image_div}><img className={styles.image} src={image} alt="" /><h4>{props.name}</h4></div></td>
          <td><p className={styles.paragraph}>{props.agent}</p></td>
          <td><h4>{props.analysis}</h4></td>
          <td><p className={styles.paragraph}>{props.date} {props.time}</p></td>
          <td><p className={styles.paragraph}>{props.lenght}</p></td>
        </tr>
      </table>
    </div>
  )
}

export default List
