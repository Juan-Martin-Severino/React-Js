import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemList/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailConteiner.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
      <>
    <BrowserRouter basename="/React-Js">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenido a Estudio Color"}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={"Bienvenido a Estudio Color"} />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
      </>

  );
};

export default App;
