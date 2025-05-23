import React from 'react'
import { Button } from '../ui/button';
import styles from "./style.module.css"
import { useFilterStore } from '../../store/filter';


const categories = ["All", "Men", "Women", "Kids"];
export const Categories = () => {

  const {activeCategory,setActiveCategory} = useFilterStore();
  return (
    <ul className={styles.list}>
{
categories.map((item,index) => (
    <li key={index}>
    <Button className = {styles.button}
    variant={item.toLowerCase() === activeCategory.toLowerCase() ? "dark" : "light"}
    onClick = {() => setActiveCategory(item.toLowerCase())}>
        {
            item
        }
    </Button>
    </li>
))

} 
    </ul>
  )
}
