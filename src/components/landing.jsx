import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <main>
      <ul>
        <li>
          Projecto
          <ul>
            <li>
              <Link to="/todo">To Do App</Link>
            </li>
          </ul>
        </li>
        <li>
          Tarea
          <ul>
            <li>
              <Link to="/pokedex">Pok&eacute;dex</Link>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  );
};

export default Landing;
