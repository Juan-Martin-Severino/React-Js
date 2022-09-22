import React from "react";
import { Container } from "react-bootstrap";
const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <h2>{greeting}</h2>
    </Container>
  );
};

export default ItemListContainer;
