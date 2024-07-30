import { useState, Dispatch, SetStateAction, FormEvent } from "react";
import { PokeInfo } from "../interfaces/PokeInfo";
import { fetchPokemon } from "../services/fetchPokemon";
import ButtonWithSound from "./ButtonWithSound";

const Input: React.FC<{
  setInfo: Dispatch<SetStateAction<PokeInfo>>;
  fetching: Dispatch<SetStateAction<boolean>>;
  track: HTMLAudioElement;
  btnTrack: HTMLAudioElement;
}> = ({ setInfo, fetching, track, btnTrack }) => {
  const [pokemonName, setPokemonName] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pokemonName.length) {
      alert("Captura el nombre del pokemon a buscar!!!");
      return;
    }
    fetching(true);
    track.play();
    track.loop = true;
    const pokeInfo = await fetchPokemon(pokemonName);
    if (pokeInfo.height === 0) {
      alert("Error, no existe ese pokémon");
    }
    setInfo({ ...pokeInfo });
    fetching(false);
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
          <ButtonWithSound id="bu" track={btnTrack} />
          <ButtonWithSound id="br" track={btnTrack} />
          <ButtonWithSound id="bd" track={btnTrack} />
          <ButtonWithSound id="bl" track={btnTrack} />
          <ButtonWithSound id="bc" track={btnTrack} />
        </div>
      </div>
    </form>
  );
};
export default Input;
