import { useState, useRef } from "react";
import "../styles/Todo.scss";
const Input = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title, done: false });
    setTitle("");
    ref.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        ref={ref}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button disabled={!(title.length >= 3)}>Create</button>
    </form>
  );
};
export default Input;
