import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const producto = [
  {
    id: 0,
    nombre: "Boletín",
    descripcion:
      "Boletin doble faz para llevar un correcto control de la nota del alumno.",
    precio: 150,
    picUrl: "img/boletin.jpg",
  },
];

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(producto);
  }, 2000);
});

const ItemDetailConteiner = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    promesa.then((resolve) => {
      setProducto(resolve);
    });
  }, []);
  return (
    <>
      {producto.map((item) => {
        return <ItemDetail producto={item} />;
      })}
    
    </>
    
  );

};

export default ItemDetailConteiner;
