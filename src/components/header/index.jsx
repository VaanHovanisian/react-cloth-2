import React from 'react'
import styles from "./style.module.css";
import { Logo } from '../logo';

import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { useBasket } from '../../hooks/basket';
export const Header = () => {
  const { totalCount, totalPrice } = useBasket()
  return (
    <>
      <header className={styles.header}>

        <Logo />
        <div className={styles.box}>
          <Link to="/cart">
            <div className={styles.basket}>
              <span>{totalPrice}₽</span>
              |
              <span style={{ display: "flex", alignItems: "center", gap: "5px" }} ><ShoppingCart size={16} />{totalCount}</span>
            </div>
          </Link>
          <Link to={"/order"}>
            order
          </Link>
        </div>

      </header>

    </>
  )
}