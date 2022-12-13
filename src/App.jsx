import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing";
import Pokedex from "./components/Pokedex/Pokedex";
import Todo from "./components/Todo/Todo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
