import React from "react";
import styles from "./style.module.css";
import { CardBascket, Container, Empty } from "../";
import { ShoppingCart, Trash2 } from "lucide-react";

import { Link, useNavigate } from "react-router";

import { useBasket } from "../../hooks/basket";
import { useOrder } from "../../hooks/order";


export const CatalogBascket = () => {
  const navigate = useNavigate();
  const { data, clearProducts, isLoading, error, totalCount, totalPrice } = useBasket();
  const { addToOrder } = useOrder();

  const addOrder = async () => {
    await addToOrder(data)
  }


  const deleteAllProducts = async () => {
    await clearProducts();
  }

  if (error) {
    return <h1>{error.message}</h1>
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <Container>
        <div className={styles.topbar}>
          <span className={styles.cart}>
            {" "}
            <ShoppingCart /> Basket
          </span>
          <button onClick={deleteAllProducts} className={styles.trash}>
            <Trash2 /> Clear Cart{" "}
          </button>
        </div>
        {data.length > 0 ?
          data.map((item) => <CardBascket {...item} />
          ) : <Empty
            title=" The basket is empty😕"
            text="Most likely, you have not ordered the product yet. To order the product, go to the main page."
            img="/empty.png" />
        }
        {data.length > 0 &&
          <>
            <div className={styles.total}>
              <span className={styles.items}>Total items: {totalCount} pcs.</span>
              <span className={styles.order}>Order total: {totalPrice} $</span>
            </div>
            <div className={styles.buttons}>
              <Link onClick={() => navigate(-1)} className={styles.back}>
                Go back
              </Link>
              <button className={styles.pay} onClick={addOrder}>Pay now</button>
            </div>
          </>

        }

      </Container>
    </>
  );
};
