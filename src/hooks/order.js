import useSWR from "swr";
import { ApiRoutes } from "../services/constants";
import { fetcher } from "../helpers/fetcher";
import { axiosInstance } from "../services/instance";
import { useBasket } from "./basket";

export const useOrder = () => {
  const {
    data: products,
    mutate,
    error,
    isLoading,
  } = useSWR(ApiRoutes.ORDER, fetcher);
  const data = products?.length > 0 ? products : [];
  const { clearProducts } = useBasket();

  const newData = data
    .reduce((acc, el) => {
      acc.push(Object.values(el));
      return acc;
    }, [])
    .flat()
    .filter((el) => el.id);

  const addToOrder = async (products) => {
    await axiosInstance.post(ApiRoutes.ORDER, products);
    await clearProducts();
    mutate([...data, ...products]);
  };

  return {
    addToOrder,
    data: newData,
    error,
    isLoading,
  };
};
