import { lazy } from "react";


export const Home = lazy(() => import("./home").then((data) => ({ default: data.Home })))
export const Cart = lazy(() => import("./cart").then((data) => ({ default: data.Cart })))
export const ProductPage = lazy(() => import("./product").then((data) => ({ default: data.ProductPage })))
export const Order = lazy(() => import("./order").then((data) => ({ default: data.Order })))


