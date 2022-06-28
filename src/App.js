import React from "react";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='Bienvenido a Item List Container' />
    </>
  );
};

export default App;
