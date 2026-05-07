import React from "react";

const ListItem = React.memo(({ item, onDelete }) => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // класну штуку підказав чатік для наглядності

  return (
    <div style={{ borderLeft: `10px solid ${randomColor}` }}>
      <div>
        <span>ID: {item.id}</span>
      </div>
      <button onClick={() => onDelete(item.id)}>Видалити</button>
    </div>
  );
});

export default ListItem;
