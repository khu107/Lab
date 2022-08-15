import React from 'react'
import styles from './styles.module.css'

const ResultCard = ({header, title, body, desc, style, detailButtonText, onDetailButtonClick}) => {
  return (
    <div style={style} className={styles.card}>
      <div className={styles.header} >
        <div>{header}</div>
        <button className={styles.detailButton} onClick={onDetailButtonClick}>{detailButtonText}</button>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.title}>{title}</div>
        <div>{body}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  )
}

export default ResultCard