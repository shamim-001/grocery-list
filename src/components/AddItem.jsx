import { FaPlus } from "react-icons/fa";

const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-5">
      <label className="sr-only" htmlFor="inputItem">
        Add Item
      </label>

      <input
        autoFocus
        className="p-3 rounded-md outline-none border border-solid border-gray-400 drop-shadow"
        type="text"
        id="inputItem"
        autoComplete="off"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add Item"
      />

      <button
        className="text-xl border border-solid border-gray-400 my-auto w-11 h-11 cursor-pointer p-2 rounded-md hover:bg-green-500 active:bg-green-500"
        type="submit"
        aria-label="Add item"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
