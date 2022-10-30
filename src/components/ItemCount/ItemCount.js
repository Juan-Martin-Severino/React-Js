import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleClick = () => onAdd(count);

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <>
      <Card className="Card" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Item</Card.Title>

          <Card.Text>
            <Button variant="secondary" disabled={count <= 1} onClick={handleSubtract}>
              -
            </Button>
            {count}
            <Button variant="secondary" disabled={count >= stock} onClick={handleAdd}>
              +
            </Button>
          </Card.Text>

          <Button
            variant="secondary"
            disabled={stock <= 0}
            onClick={handleClick}
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
