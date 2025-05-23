import React from "react";
import { Button } from "../ui/button";
import { useBasket } from "../../hooks/basket";
import styles from "./style.module.css";
import { Plus } from "lucide-react";

export const CardButton = (props) => {
  const [loading, setLoading] = React.useState(false);
  const { addProduct, isToBasket } = useBasket();
  const addToCart = async () => {
    setLoading(true);
    await addProduct(props);
    setLoading(false);
  };
  return (
    <Button
      onClick={addToCart}
      disabled={loading}
      className={styles.cartButton}
      variant={isToBasket(props.id) ? "dark" : "light"}
    >
      {isToBasket(props.id) ? (
        "in cart"
      ) : (
        <>
          <Plus size={16} /> Add
        </>
      )}
    </Button>
  );
};
