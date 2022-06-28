import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h4>{greeting}</h4>
      <ItemCount stock={10} initial={1} />
    </>
  );
};

export default ItemListContainer;
