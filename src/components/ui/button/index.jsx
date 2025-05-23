import React from 'react'
import styles from "./style.module.css"

export const Button = ({variant = "dark", className, children, onClick, disabled}) => {

  return (
<button disabled={disabled} className={`${styles.button} ${styles[variant]} ${className} `} onClick={onClick}>
  {children}
</button>
  )
}
