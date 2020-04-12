import React from "react";
import "./App.css";
import MimicVideo from "./MimicVideo";
import ForeheadVideo from "./ForeheadVideo";
import EyeVideo from "./EyeVideo";
import MouthNoseVideo from "./MouthNoseVideo";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Paralisia Facial</h1>
        <div className="row">
          <div className="col-4">
            <h2>Mímica facial</h2>
            <MimicVideo />
          </div>
        </div>
        <h2>Estimulação com gelo</h2>
        <div className="row">
          <div className="col-4">
            <p>Estimulação da testa</p>
            <ForeheadVideo />
          </div>
          <div className="col-4">
            <p>Estimulação do olho</p>
            <EyeVideo />
          </div>
          <div className="col-4">
            <p>Estimulação da boca e nariz</p>
            <MouthNoseVideo />
          </div>
        </div>
      </div>
      <footer>
        <a href="https://github.com/Ritacer/react-facial-palsy" target="_blank">
          Open-source
        </a>{" "}
        code by{" "}
        <a
          href="https://www.linkedin.com/in/rita-cerqueira-20198766"
          target="_blank"
        >
          Rita Cerqueira
        </a>
        , 2020.
      </footer>
    </div>
  );
}
