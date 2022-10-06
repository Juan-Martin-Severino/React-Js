import ItemCount from "../ItemCount/ItemCount";
import Item from "../ItemList/Item"


const ItemDetail = ({ product }) => {
  return (
    <>
      <Item product={product} />
      <ItemCount/>
    </>
  );
}
 
export default ItemDetail;