import React from 'react'

import { Container,Categories,Sort } from '../'

import styles from "./style.module.css"
export const TopBar = () => {
  return (
    <Container className={styles.container}>
  <Categories />
  <Sort />
</Container>
  )
}
