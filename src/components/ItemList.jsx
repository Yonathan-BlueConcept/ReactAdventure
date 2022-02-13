import { FaTrashAlt } from "react-icons/fa";
import LineItem from "./lineItem";
const ItemList = ({ handleChange, handleDelete, items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
