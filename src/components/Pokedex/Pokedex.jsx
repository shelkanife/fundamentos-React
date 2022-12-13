import { useState } from "react";
import "./styles/Pokedex.css";
import AditionalInfo from "./components/AditionalInfo";
import Input from "./components/Input";
import Screen from "./components/Screen";
import Stats from "./components/Stats";

function Pokedex() {
  const [info, setInfo] = useState({
    src: null,
    height: null,
    weight: null,
    type: [],
    stats: [0, 0, 0, 0, 0, 0],
  });

  return (
    <div className="pokedex">
      <div id="container">
        <div id="pokedex-left">
          <div id="lights-container">
            <div id="outer-circle">
              <div id="inner-circle"></div>
            </div>
            <div id="semaphore-indicators">
              <div className="semaphore-circle" id="red"></div>
              <div className="semaphore-circle" id="yellow"></div>
              <div className="semaphore-circle" id="green"></div>
            </div>
          </div>
          <Screen src={info.src} />
          <Input setInfo={setInfo} />
        </div>

        <div id="pokedex-right">
          <div id="frame"></div>
          <Stats type={info.type} stats={info.stats} />
          <div id="grid-buttons">
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
            <div className="g-btn"></div>
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
            <div id="medium-circle"></div>
          </div>
          <AditionalInfo height={info.height} weight={info.weight} />
        </div>
      </div>
    </div>
  );
}

export default Pokedex;
