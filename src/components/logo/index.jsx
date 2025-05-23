import React from "react";
import Styles from "./style.module.css"
import { Link } from "react-router";


export const Logo = () => {
return (
<Link to="/" >
<div className={Styles.logo}>
    <img className={Styles.img} src="public/Akatsuki-Logo-PNG-Pic.png" width="45" height="45" />
    <b className={Styles.b}>REACT CLOTH</b>
    
    <strong className={Styles.strong}>the best clothes in the world</strong>
    </div>
</Link>
);
}