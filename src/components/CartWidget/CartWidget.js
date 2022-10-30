import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Badge } from "react-bootstrap";
import "./CartWidget.css";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="dark">
          {totalQuantity}
        </Badge>
      )}
    </>
  );
};

export default CartWidget;
