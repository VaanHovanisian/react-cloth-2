import "./style/global.css";
import "./style/repeat.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home, Cart, ProductPage, Order } from "./pages";
import { Header } from "./components/header";

import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<h1>Not found Page 404</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
