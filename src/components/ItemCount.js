import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const agregar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
    if (contador >= stock) {
      alert("No hay más stock");
    }
  };

  const quitar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
    if (contador <= 0) {
      alert("No hay ningún item para agregar");
    }
  };

  const onAdd = () => {
    if (contador > 0) {
      alert(`Se agregaron ${contador} unidades al carrito`);
    }

    if (contador == 0){
        alert(`No hay productos para agregar al carrito`);
    }
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Item</Card.Title>

          <Card.Text>
            <Button onClick={quitar}>-</Button>
            {contador}
            <Button onClick={agregar}>+</Button>
          </Card.Text>

          <Button variant="primary" onClick={onAdd}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
