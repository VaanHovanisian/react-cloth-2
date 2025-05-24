import React from "react";
import styles from "./style.module.css";
import { Card } from "../card";

import { Skeleton } from "../card/skeleton";

export const Catalog = ({ data, error, isLoading }) => {
  if (error) {
    return <h1>{error.message}</h1>;
  }
  const skeleton = new Array(8)
    .fill(0)
    .map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <h1 className={styles.title}>All cloth</h1>

      <ul className={styles.list}>
        {isLoading
          ? skeleton
          : data.map((item) => (
              <li key={item.id}>
                <Card {...item} />
              </li>
            ))}
      </ul>
    </>
  );
};
