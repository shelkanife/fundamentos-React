import { useEffect, useState } from "react";
import Input from "./components/Input";
import List from "./components/List";

function Todo() {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList([...list, { ...item, id: new Date().toString() }]);
  };

  return (
    <div className="todo">
      <main>
        <h1>Todo App</h1>
        <Input addItem={addItem} />

        <List list={list} setList={setList} />
      </main>
    </div>
  );
}

export default Todo;
