import { useState } from "react";
import { fetchPokemon } from "../services/fetchPokemon";
import ButtonWithSound from "./ButtonWithSound";

const Input = ({ setInfo, fetching, track, btnTrack }) => {
  const [pokemonName, setPokemonName] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!pokemonName.length) {
      alert("Captura el nombre del pokemon a buscar!!!");
      return;
    }
    fetching((prev) => !prev);
    track.play();
    track.loop = true;
    const pokeInfo = await fetchPokemon(pokemonName);
    if (pokeInfo.height === null) alert("Error, no existe ese pokémon");
    setInfo({ ...pokeInfo });
    fetching((prev) => !prev);
    track.pause();
  };
  return (
    <form className="pk-input" onSubmit={handleSubmit}>
      <div className="sub-container">
        <input type="submit" className="circle" />
        <span />
        <span />
      </div>
      <div id="input-pokemon">
        <div className="pixel" />
        <input
          type="text"
          id="input"
          onChange={(e) => setPokemonName(e.target.value)}
          autoComplete="off"
        />
        <div id="d-pad">
          <ButtonWithSound type="button" id="bu" track={btnTrack} />
          <ButtonWithSound type="button" id="br" track={btnTrack} />
          <ButtonWithSound type="button" id="bd" track={btnTrack} />
          <ButtonWithSound type="button" id="bl" track={btnTrack} />
          <ButtonWithSound type="button" id="bc" track={btnTrack} />
        </div>
      </div>
    </form>
  );
};
export default Input;
