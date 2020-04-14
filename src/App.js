import React from "react";
import "./App.css";
import ResponsivePlayer from "./responsive-player";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="newContainer">
          <h1>Paralisia Facial</h1>
          <h2>Mímica facial</h2>
          <ResponsivePlayer url="92832974_257056932361507_1546021259706368000_n.mp4" />
          <h2>Estimulação com gelo</h2>
          <p>Estimulação da testa</p>
          <ResponsivePlayer url="93515553_2905964176146592_5721245979890417664_n.mp4" />
          <p>Estimulação do olho</p>
          <ResponsivePlayer url="92991474_693535984735930_6435654742369632256_n.mp4" />
          <p>Estimulação da boca e nariz</p>
          <ResponsivePlayer url="92996122_218388046156541_8443100608021397504_n.mp4" />
        </div>
        <footer>
          <a
            href="https://github.com/Ritacer/react-facial-palsy"
            target="_blank"
          >
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
    </div>
  );
}
