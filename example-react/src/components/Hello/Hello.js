import React from 'react'

import styles from './Hello.scss'

const Hello = (props) => (
  <h1 className={styles.hello}>Hello {props.name}</h1>
)

export default Hello