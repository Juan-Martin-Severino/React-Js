import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

let cantidad = 0;
const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      <Badge>{cantidad}</Badge>
    </>
  );
};

export default CartWidget;
