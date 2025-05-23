import React from "react";
import { useLocation, useParams } from "react-router";
import { useProducts } from "../hooks/products";
import { Product } from "../components/product";
export const ProductPage = () => {
  const location = useLocation();
  const [product, setProduct] = React.useState({});
  const { id } = useParams();
  const { getProduct } = useProducts();
  React.useEffect(() => {
    getProduct(id, location.pathname).then((data) => setProduct(data));
  }, [getProduct, id, location.pathname]);
  return <Product {...product} />;
};
