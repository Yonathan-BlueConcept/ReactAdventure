import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleDelete, handleChange }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleChange(item.id)}
        checked={item.checked}
      />
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
      />
      <lable
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleChange(item.id)}
      >
        {item.itemName}
      </lable>
    </li>
  );
};

export default LineItem;
