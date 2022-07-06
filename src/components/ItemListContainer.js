import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productos = [
  {
    id: 0,
    nombre: "Boletín",
    descripcion:
      "Boletin doble faz para llevar un correcto control de la nota del alumno.",
    precio: 150,
    picUrl: "img/boletin.jpg",
  },
  {
    id: 1,
    nombre: "Tag",
    descripcion: "Tag impreso en papel Kraft para personalizar tus regalos.",
    precio: 50,
    picUrl: "img/tag.jpg",
  },
  {
    id: 2,
    nombre: "Menú",
    descripcion: "Menú plastificado.",
    precio: 200,
    picUrl: "img/menu.jpg",
  },
  {
    id: 3,
    nombre: "Tarjeta",
    descripcion:
      "Tarjeta de regalo con diferentes motivos. Para dedicatorias en tus regalos",
    precio: 100,
    picUrl: "img/tarjeta.jpg",
  },
];

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

const ItemListContainer = ({ greeting }) => {
  const [productosList, setProductosList] = useState([]);

  useEffect(() => {
    promesa.then((resolve) => {
      setProductosList(resolve);
    });
  }, []);

  return (
    <>
      <h4>{greeting}</h4>
      <ItemCount stock={10} initial={1} />
      <ItemList productos={productosList}/>
    </>
  );
};

export default ItemListContainer;
