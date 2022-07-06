import React from "react";
import { Card } from "react-bootstrap";

const Item = ({ producto }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.picUrl} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>${producto.precio}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
