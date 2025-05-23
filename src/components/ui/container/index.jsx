import React from "react";
import styles from "./style.module.css";
import clsx from "clsx";
export const Container = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};
