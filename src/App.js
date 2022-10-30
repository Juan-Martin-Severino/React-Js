import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemList/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailConteiner.js";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartProvider } from "./context/CartContext.js";


const App = () => {
  return (
    <>
      <BrowserRouter basename="/React-Js">
        <CartProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenido a Estudio Color"} />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting={"Bienvenido a Estudio Color"} />
              }
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
