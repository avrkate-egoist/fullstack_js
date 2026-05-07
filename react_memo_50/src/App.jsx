import { useState, useCallback } from "react";
import ListItem from "./components/ListItem";

const generateItems = () => {
  return Array(20000)
    .fill(null)
    .map((_, i) => ({
      id: i,
      label: i + 1,
    }));
};

const App = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(generateItems());

  const deleteItem = useCallback(
    (id) => {
      const newItems = items.filter((item) => item.id !== id);
      setItems(newItems);
    },
    [items],
  );

  return (
    <div>
      <div>
        <div>
          <h2>Лічильник: {count}</h2>
          <button onClick={() => setCount((c) => c + 1)}>
            + 1 до лічильника
          </button>
        </div>
      </div>

      <div>
        {items.map((item) => (
          <ListItem key={item.id} item={item} onDelete={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default App;
