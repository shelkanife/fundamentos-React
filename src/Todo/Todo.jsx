import { useEffect, useState, useRef } from "react";
import List from "./components/List";
import useTodos from "./hooks/hook";
import Prompt from "./Prompt";

function Todo() {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const { todos, removeTodo, addTodo, check, uncheck } = useTodos();
  return (
    <div className="todo">
      <main>
        <h1>Todo App</h1>
        <button tabIndex={1} className="btn-add" onClick={() => setShow(true)}>
          +
        </button>
        <Prompt
          show={show}
          setShow={setShow}
          reference={ref}
          addItem={addTodo}
        />
        <div className="list">
          <List data={todos.pending} fnc={check} />
          {todos.completed.length ? (
            <>
              <h3 style={{ marginTop: "1rem" }}>Completed todos</h3>
              <List
                data={todos.completed}
                fncRemove={removeTodo}
                fnc={uncheck}
              />
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}

export default Todo;
