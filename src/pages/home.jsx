import React from "react";
import { Catalog } from "../components/catalog";

import { TopBar } from "../components/top-bar";
import { useFilter } from "../hooks/filter";
import { useProducts } from "../hooks/products";

export const Home = () => {
  useFilter();
  const { data, error, isLoading } = useProducts()
  return (
    <>
      <TopBar />
      <Catalog data={data} error={error} isLoading={isLoading} />
    </>
  );
};
