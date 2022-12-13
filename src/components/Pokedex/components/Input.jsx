import { useState } from "react";
import "../styles/Pokedex.css";
import { fetchPokemon } from "../services/fetchPokemon";
const Input = ({ setInfo }) => {
  const [pokemonName, setPokemonName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pokemonName.length) {
      alert("Captura el nombre del pokemon a buscar!!!");
      return;
    }
    const pokeInfo = await fetchPokemon(pokemonName);
    if (pokeInfo.height === null) alert("Error, no existe ese pokémon");
    setInfo({ ...pokeInfo });
  };
  return (
    <form id="fetch-pokemon" onSubmit={handleSubmit}>
      <div id="buttons-container">
        <input type="submit" id="btn-circle" value="" />
        <div className="btn-ligth" id="red-ligth"></div>
        <div className="btn-ligth" id="blue-ligth"></div>
      </div>
      <div id="input-pokemon">
        <div id="sound-pixel">
          <div></div>
          <div></div>
        </div>
        <input
          type="text"
          id="input"
          autoFocus
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <div id="d-pad">
          <div className="row" id="up"></div>
          <div>
            <div className="row" id="left"></div>
            <div className="row" id="center"></div>
            <div className="row" id="right"></div>
          </div>
          <div className="row" id="down"></div>
        </div>
      </div>
    </form>
  );
};
export default Input;
