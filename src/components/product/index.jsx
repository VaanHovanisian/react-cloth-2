import React from "react";
import { Title, Button, Counter } from "../";

import { useNavigate } from "react-router";

import { useBasket } from "../../hooks/basket";

import styles from "./style.module.css";
export const Product = (props) => {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const { addProduct, isToBasket, isFindToBasket } = useBasket();
  const isProductToBasket = isFindToBasket(props.id);
  const productPrice = isProductToBasket?.count * props.price || props.price;
  const addToCart = async () => {
    setLoading(true);
    await addProduct(props);
    setLoading(false);
  };

  return (
    <article>
      <div className={styles.product}>
        <div className={styles.images}>
          {props?.img?.map((src, index) => (
            <img key={index} src={src} alt="" width={130} height={130} />
          ))}
        </div>
        <img src={props?.img?.[0]} alt="" width={430} height={440} />
        <div>
          <Title size="m" className={styles.title}>
            {props.title}
          </Title>
          <div>
            <div className={styles.count}>
              <span className={styles.price}>{productPrice} $</span>
              {isToBasket(props.id) && <Counter {...isProductToBasket} />}
            </div>
            <div className={styles.buttons}>
              <Button
                variant="light"
                className={styles.back}
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
              <Button
                variant="light"
                disabled={loading}
                className={styles.back}
                onClick={addToCart}
              >
                {isToBasket(props.id) ? "in cart" : "Add To Card"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
