import "../styles/Todo.scss";
import { useState } from "react";

const ListItem = ({ item: { title, id }, index, removeTodo }) => {
  const [checked, setChecked] = useState(false);
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={checked}
        id={`input${index}`}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor={`input${index}`} className={checked ? "done" : ""}>
        {title}
        {checked && <span className="line"></span>}
      </label>
      <button onClick={() => removeTodo(id)}>Delete</button>
    </li>
  );
};
export default ListItem;
