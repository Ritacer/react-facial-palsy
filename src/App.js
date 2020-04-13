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
          <ResponsivePlayer url="https://youtu.be/_27eD49ePQE" />
          <h2>Estimulação com gelo</h2>
          <p>Estimulação da testa</p>
          <ResponsivePlayer url="https://youtu.be/_27eD49ePQE" />
          <p>Estimulação do olho</p>
          <ResponsivePlayer url="https://youtu.be/_27eD49ePQE" />
          <p>Estimulação da boca e nariz</p>
          <ResponsivePlayer url="https://youtu.be/_27eD49ePQE" />
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
