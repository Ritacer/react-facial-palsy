import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Paralisia Facial</h1>
        <div className="row">
          <div className="col-6">
            <h2>Mímica facial</h2>
            vídeo 1
          </div>
          <div className="col-6">
            <h2>Estimulação com gelo</h2>
            vídeo 2
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
