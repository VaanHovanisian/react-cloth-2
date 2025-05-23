import React from 'react'
import styles from "./style.module.css";
import { useBasket } from '../../hooks/basket';
import { Minus, Plus } from 'lucide-react';
export const Counter = (props) => {

      const{updateProduct} = useBasket()
 



  const decrement = async () => {
    if (props.count === 1) {
      return;
    } else {

     await updateProduct({...props, count: props.count - 1})
     
    
    }
  };

  const countIncrement = async () => {

    await updateProduct({...props, count: props.count + 1})
   
   
    
  };
  return (
  


    <div className={styles.buttons}>
            <button onClick={decrement} className={styles.button}>
              <Minus />
            </button>
            <span className={styles.count}>{props.count}</span>
            <button onClick={countIncrement} className={styles.button}>
              <Plus />
            </button>
          </div>
          
  )
}
