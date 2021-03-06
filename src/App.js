import React from "react";
import "./App.css";
import FacialPalsy from "./FacialPalsy";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <FacialPalsy />
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
