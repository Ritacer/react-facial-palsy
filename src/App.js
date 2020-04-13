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
          <ResponsivePlayer url="https://video.fopo1-1.fna.fbcdn.net/v/t42.9040-2/92832974_257056932361507_1546021259706368000_n.mp4?_nc_cat=108&_nc_sid=985c63&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=m4MezwNrtZcAX92uTmI&rl=300&vabr=147&_nc_ht=video.fopo1-1.fna&oh=301e7cf226b250dfc7741ba31b9fc795&oe=5E949F3E" />
          <h2>Estimulação com gelo</h2>
          <p>Estimulação da testa</p>
          <ResponsivePlayer url="https://video.fopo1-1.fna.fbcdn.net/v/t42.9040-2/93515553_2905964176146592_5721245979890417664_n.mp4?_nc_cat=111&_nc_sid=985c63&efg=eyJybHIiOjMxMywicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=phr1r0DPCEwAX87JDP7&rl=313&vabr=174&_nc_ht=video.fopo1-1.fna&oh=769c2450049a0005716efa6d4987096f&oe=5E94A25C" />
          <p>Estimulação do olho</p>
          <ResponsivePlayer url="https://video.fopo1-1.fna.fbcdn.net/v/t42.9040-2/92991474_693535984735930_6435654742369632256_n.mp4?_nc_cat=102&_nc_sid=985c63&efg=eyJybHIiOjM0MCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=ri72aZg6B0kAX-Vkm4T&rl=340&vabr=189&_nc_ht=video.fopo1-1.fna&oh=3014c5b1c2f97cab229a47c982a623d5&oe=5E949A01" />
          <p>Estimulação da boca e nariz</p>
          <ResponsivePlayer url="https://video.fopo1-1.fna.fbcdn.net/v/t42.9040-2/92996122_218388046156541_8443100608021397504_n.mp4?_nc_cat=103&_nc_sid=985c63&efg=eyJybHIiOjM0MywicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=4YRGPunli6QAX_FqcO2&rl=343&vabr=191&_nc_ht=video.fopo1-1.fna&oh=ab47b845426df33f3eeae0e8ca8ac6f9&oe=5E949CD3" />
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
