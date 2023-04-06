import { useState } from "react";

function List(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
    </ul>
  );
}

function ListItem(props) {
  const { text } = props;
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(text);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <li>
      {editing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
        />
      ) : (
        <>
          {text}
          <button onClick={handleEditClick}>редагувати</button>
        </>
      )}
    </li>
  );
}

function Task6() {
  const items = ["Елемент 1", "Елемент 2", "Елемент 3"];

  return <List items={items} />;
}

export default Task6;
