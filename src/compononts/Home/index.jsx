import React, { useState } from 'react'
import styles from '../../compononts/Home/style.module.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoginModal from './LoginModal'
import { useSelector } from 'react-redux'

const LinkStyle = styled(Link)`
  text-decoration: none;
`

export default function Home() {
  const user = useSelector((root) => root.user)

  const [modalIsOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpenClick = () => {
    setIsOpen(true)
  }

  return (
    <div className={'container'}>
      <div className={styles.box1}>
        <div className={styles.subContainer}>
          <div className={styles.subtitle}>
            The Best <br /> Medical Services
          </div>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, rem! Repellat totam minima numquam
            dolorem porro ex iste, nesciunt tempore inventore possimus, hic distinctio modi obcaecati praesentium atque
            dolore optio?
          </span>
        </div>
        <button className={styles.loginButton} onClick={handleOpenClick}>
          Login
        </button>
      </div>
      <LoginModal visibe={modalIsOpen} onClsoe={handleClose} />
    </div>
  )
}
