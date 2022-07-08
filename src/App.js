import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailConteiner from "./components/ItemDetailConteiner.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a Item List Container' />
      <ItemDetailConteiner/>
    </>
  );
};

export default App;
