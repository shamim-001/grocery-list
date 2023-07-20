import { useState } from "react";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  function addNewItem(item) {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndAdd(listItems);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem) return;
    addNewItem(newItem);
    setNewItem("");
  }

  function setAndAdd(newItems) {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }

  function handleCheck(id) {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndAdd(listItems);
  }

  function handleDelete(id) {
    const listItems = items.filter((item) => item.id !== id);
    setAndAdd(listItems);
  }

  function handleCheckCount() {
    let count = 0;
    items.forEach((item) => (item.checked ? count++ : count));
    return count;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Gorceris List" />

      <div className="grow mx-auto mt-8">
        <AddItem
          handleSubmit={handleSubmit}
          newItem={newItem}
          setNewItem={setNewItem}
        />

        <SearchItem search={search} setSearch={setSearch} />

        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>

      <Footer itemCount={items.length} handleCheckCount={handleCheckCount} />
    </div>
  );
};

export default App;
