import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState({
    pending: [],
    completed: [],
  });

  const removeTodo = (id) => {
    const index = todos.completed.findIndex((e) => e.id === id);
    if (index !== -1) {
      const copy = { ...todos };
      copy.completed.splice(index, 1);
      setTodos(copy);
    }
  };

  const addTodo = (todo) => {
    setTodos({
      ...todos,
      ["pending"]: [...todos.pending, { ...todo, id: Date.now(), done: false }],
    });
  };
  const check = (id) => {
    const index = todos.pending.findIndex((e) => e.id === id);
    if (index !== -1) {
      const copy = { ...todos };
      const todo = copy.pending.splice(index, 1)[0];
      todo.done = true;
      copy.completed.push(todo);
      setTodos(copy);
    }
  };

  const uncheck = (id) => {
    const index = todos.completed.findIndex((e) => e.id === id);
    const copy = { ...todos };
    if (index !== -1) {
      const todo = copy.completed.splice(index, 1)[0];
      todo.done = false;
      copy.pending.push(todo);
      setTodos(copy);
    }
  };

  return {
    todos,
    removeTodo,
    addTodo,
    check,
    uncheck,
  };
};

export default useTodos;

// const useClickOutside = (r, setShow) => {
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (r.current && !r.current.contains(e.target)) {
//         console.log("here goes the action");
//         setShow(false);
//       }
//     };

//     document.addEventListener("mousedown", (e) => {
//       handleClickOutside(e);
//     });

//     return () => {
//       document.addEventListener("mousedown", handleClickOutside);
//     };
//   }, [r]);
// };

// export default useClickOutside;
