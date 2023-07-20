import ListItem from "./ListItem";
const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <ListItem
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p className="border border-solid border-sky-200 py-8 px-5 shadow">
          Your list is empty.
        </p>
      )}
    </main>
  );
};

export default Content;
