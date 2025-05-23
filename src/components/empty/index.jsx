import React from "react";
import styles from "./style.module.css";

import { Link, useNavigate } from "react-router";

export const Empty = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.title}>
        <h1>{props.title}</h1>
        
      </div>
      <p className={styles.par}>
       {props.text}
      </p>
      <div className={styles.img}>
        <img src={props.img} width="300" height="255" />
      </div>
      <div className={styles.button}>
        <Link onClick={() => navigate(-1)} className={styles.back}>
          Go back
        </Link>
      </div>
    </>
  );
};
