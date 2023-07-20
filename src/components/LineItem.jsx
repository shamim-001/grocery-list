import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="w-full flex gap-2 p-3 justify-between bg-slate-600 mb-2 rounded-md">
      <input
        className="w-8 cursor-pointer"
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(item.id)}
        className="text-white w-64"
      >
        {" "}
        {item.item}{" "}
      </label>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        className="text-white hover:text-red-600 outline-none"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
