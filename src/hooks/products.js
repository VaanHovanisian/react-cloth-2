import useSWR from "swr";
import { fetcher } from "../helpers/fetcher.js";
import { useFilterStore } from "../store/filter.js";
import { ApiRoutes } from "../services/constants.js";
import { axiosInstance } from "../services/instance.js";

export const useProducts = () => {
  const { activeCategory, activeSort } = useFilterStore();

  const sortQuery =
    activeSort === "alphabetical" ? "_sort=title" : "_sort=price";
  const categoryQuery =
    activeCategory === "all" ? "" : `type=${activeCategory}`;
  const {
    data: products,
    error,
    isLoading,
  } = useSWR(`${ApiRoutes.PRODUCTS}?${sortQuery}&${categoryQuery}`, fetcher);
  const data = products?.length > 0 ? products : [];

  const getProduct = async (id, url) => {
    let urlPage = url === "/order" ? ApiRoutes.ORDER : ApiRoutes.PRODUCTS;
    return (await axiosInstance.get(`${urlPage}/${id}`)).data;
  };
  return {
    data,
    error,
    isLoading,
    getProduct,
  };
};
