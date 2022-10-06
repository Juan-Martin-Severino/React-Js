export const products = [
    {id: 1, title:'boletin', category: 'servicios', description:'Boletin doble faz para llevar un correcto control de la nota del alumno.', price: 150, pictureUrl: 'https://i.ibb.co/jz7Dbkq/boletin.jpg', stock:50},
    {id: 2, title:'tag', category: 'productos', description:'Tag impreso en papel Kraft para personalizar tus regalos.', price: 50, pictureUrl: 'https://i.ibb.co/ynw8xg0/tag.jpg', stock:50},
    {id: 3, title:'menu', category: 'servicios', description:'Menú plastificado.', price: 200, pictureUrl: 'https://i.ibb.co/syrfCV9/menu.jpg', stock:50},
    {id: 4, title:'tarjeta', category: 'productos', description:'Tarjeta de regalo con diferentes motivos. Para dedicatorias en tus regalos', price: 100, pictureUrl: 'https://i.ibb.co/PGvmNcQ/tarjeta.jpg', stock:50}
  ]
  
  export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        return resolve(products);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })
  
    return promise
  };
  
  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results = products.filter((product) => product.category === categoryId);
      setTimeout(() => {
        return resolve(results);
      }, 2000)
    })
  
    return promise
  };