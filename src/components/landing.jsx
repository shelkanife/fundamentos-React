import { Link } from "react-router-dom";
import "./landing.scss";
const Landing = () => {
  return (
    <main className="landing">
      <div>
        <p className="item-name"> Projecto</p>
        <p className="item-link">
          <Link to="/todo">To Do App</Link>
        </p>
        <p className="item-name">Tarea</p>
        <p className="item-link">
          <Link to="/pokedex">Pok&eacute;dex</Link>
        </p>
      </div>
    </main>
  );
};

export default Landing;
