import React from "react";
const Stats: React.FC<{
  type: string[],
  stats: number[],
}> = ({ type, stats }) => {
  return (
    <div className="data-screen">
      <p>
        Type: <span id="type"> {type.join(" ")}</span>
      </p>
      <div className="stats-container">
        <div
          className="bar"
          style={{
            background: `linear-gradient(0deg, #0f6283 ${
              (stats[0] * 100) / 200
            }%, #cfcaca ${(stats[0] * 100) / 200}% 100%`,
          }}
        >
          {/* <div
            className="color-bar"
            id="ps"
            style={{ height: `${(stats[0] * 100) / 200}%` }}
          ></div> */}
        </div>
        <div
          className="bar"
          style={{
            background: `linear-gradient(0deg, #0f6283 ${
              (stats[1] * 100) / 200
            }%, #cfcaca ${(stats[1] * 100) / 200}% 100%`,
          }}
        ></div>
        <div
          className="bar"
          style={{
            background: `linear-gradient(0deg, #0f6283 ${
              (stats[2] * 100) / 200
            }%, #cfcaca ${(stats[2] * 100) / 200}% 100%`,
          }}
        ></div>
        <div
          className="bar"
          style={{
            background: `linear-gradient(0deg, #0f6283 ${
              (stats[3] * 100) / 200
            }%, #cfcaca ${(stats[3] * 100) / 200}% 100%`,
          }}
        ></div>
        <div
          className="bar"
          style={{
            background: `linear-gradient(0deg, #0f6283 ${
              (stats[4] * 100) / 200
            }%, #cfcaca ${(stats[4] * 100) / 200}% 100%`,
          }}
        ></div>
        <div
          className="bar"
          style={{
            background: `linear-gradient(0deg, #0f6283 ${
              (stats[5] * 100) / 200
            }%, #cfcaca ${(stats[5] * 100) / 200}% 100%`,
          }}
        ></div>
      </div>
      <div className="stats-container">
        <p>PS</p>
        <p>ATK</p>
        <p>DEF</p>
        <p>SP. ATK</p>
        <p>SP. DEF</p>
        <p>SPEED</p>
      </div>
    </div>
  );
};
export default Stats;
