import { useState } from "react";
import FetchIndicator from "./components/FetchIndicator";
import Screen from "./components/Screen";
import Input from "./components/Input";
import Stats from "./components/Stats";
import AditionalInfo from "./components/AditionalInfo";
import ButtonWithSound from "./components/ButtonWithSound";
import fetchingTrack from "/bit.wav";
import track from "/shot.wav";
import "./styles/pokedex.scss";
import { PokeInfo } from "./interfaces/pokedex";

const Pokedex = () => {
  const [info, setInfo] = useState<PokeInfo>({
    src: "",
    height: 0,
    weight: 0,
    type: [],
    stats: [0, 0, 0, 0, 0, 0],
  });
  const [fetching, setFetching] = useState<boolean>(false);
  const [fetchingAudio, setFetchingAudio] = useState(new Audio(fetchingTrack));
  const [btnTrack, setBtnTrack] = useState(new Audio(track));
  return (
    <div className="poke-wrapper">
      <section className="left-side half-width">
        <div className="container">
          <header id="right">
            <FetchIndicator fetching={fetching} />
          </header>
          <div className="content">
            <Screen src={info.src} />
            <Input
              setInfo={setInfo}
              fetching={setFetching}
              track={fetchingAudio}
              btnTrack={btnTrack}
            />
          </div>
        </div>
      </section>
      <section className="right-side half-width">
        <div className="front">
          <h1>DEX</h1>
        </div>
        <div className="back">
          <div className="content">
            <Stats type={info.type} stats={info.stats} />
            <div className="grid-buttons">
              {Array.from({ length: 10 }).map((e, i) => (
                <div className="g-btn" key={i}></div>
              ))}
            </div>
            <div className="ligths-btns">
              <div id="btns-flats-container">
                <div id="circles-container">
                  <div className="small-circle"></div>
                  <div className="small-circle"></div>
                </div>
                <div id="flats-container">
                  <div className="flat"></div>
                  <div className="flat"></div>
                </div>
              </div>
            </div>
            <div id="circles-squares-container">
              <div className="square"></div>
              <div className="square"></div>
              <ButtonWithSound
                type="button"
                id="medium-circle"
                track={btnTrack}
              />
            </div>
            <AditionalInfo height={info.height} weight={info.weight} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Pokedex;
