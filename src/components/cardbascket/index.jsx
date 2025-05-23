import React from "react";
import styles from "./style.module.css";
import { X } from "lucide-react";
import { useBasket } from "../../hooks/basket";
import { Counter } from "../counter";

export const CardBascket = (props) => {
 
  
  const{removeProduct} = useBasket()
 





  const deleteProduct = async () =>{
await removeProduct (props.id);
  }
  return ( 
    
       
        <div className={styles.cardbasket}>
          <img src={props.img?.[0]} width="80" height="80" />
          <span className={styles.cardname}>{props.title} </span>
          <Counter {...props}/>
          <span className={styles.price}>{props.price * props.count}$</span>
          <button onClick={deleteProduct} className={styles.button}>
            <X />
          </button>
        </div>
        
      
      
    
  );
};
