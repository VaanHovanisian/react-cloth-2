import React from "react";
import styles from "./style.module.css"
import clsx from "clsx";
import { useFilterStore } from "../../store/filter";


export const Sort = () =>{

const [isOpen, setIsOpen] = React.useState(false)
const{activeSort,setActiveSort} = useFilterStore()

 

    return(

        <div className={styles.sort}>
            
            <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.span}>^ Sort by:</span>
                <span className={styles.checked}>{activeSort}</span>
            </button>
            {
                isOpen && 
                 <ul className={styles.list}>
            <li className={clsx(styles.item, activeSort === "alphabetical" && styles.itemActive)} onClick={() => setActiveSort("alphabetical")}>
                alpabetical
                </li>
            <li className={clsx(styles.item, activeSort === "price" && styles.itemActive)} onClick={() => setActiveSort("price")}>
                price
                </li>
        </ul>
            }
       
        </div>
    )
}