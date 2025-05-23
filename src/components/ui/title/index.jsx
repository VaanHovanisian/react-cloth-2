import React from 'react'
import styles  from "./style.module.css";
export const Title = ({size, className,children}) => {

const setMapTag = {
    s: "h3",
    m: "h2",
    l: "h1" 
}
const setMapSize={
    s: styles.small,
    m: styles.medium,
    l: styles.large
}
  return React.createElement(setMapTag[size], {className: setMapSize[size] + " " + className }, children)
   
  
}
