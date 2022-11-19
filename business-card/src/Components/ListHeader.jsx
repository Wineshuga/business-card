import React from 'react'
import styles from './listHeader.module.scss'

const ListHeader = () => {
  return (
      <div className={styles.header}>
        <h5>File Name</h5>
        <h5>Agent</h5>
        <h5>Sentiment Result</h5>
        <h5>Date Uploaded</h5>
        <h5>Lenght</h5>
    </div>
  )
}

export default ListHeader
