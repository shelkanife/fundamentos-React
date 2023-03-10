import "../styles/Todo.scss";
import { useState } from "react";

const ListItem = ({ item: { title, id, done }, fncRemove, fnc }) => {
  const handleChecked = (e) => fnc(id);
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={done}
        id={`input${id}`}
        onChange={handleChecked}
      />
      <label
        htmlFor={`input${id}`}
        className={done ? "done" : ""}
        onClick={fnc}
      >
        {title}
        {done && <span />}
      </label>
      {done ? <button onClick={() => fncRemove(id)}>Delete</button> : null}
    </li>
  );
};
export default ListItem;
