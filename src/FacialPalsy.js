import React from "react";
import ResponsivePlayer from "./responsive-player";
import "./FacialPalsy.css";

export default function FacialPalsy() {
  return (
    <div className="FacialPalsy">
      <div className="newContainer">
        <div className="translation">
          <h1>Paralisia Facial</h1>
          <h3>Português🇵🇹/English🇬🇧</h3>
        </div>
        <div className="main">
          <h2>Mímica facial</h2>
          <ResponsivePlayer url="92832974_257056932361507_1546021259706368000_n.mp4" />
        </div>
        <h2>Estimulação com gelo</h2>
        <div className="row">
          <div className="col-6">
            <p>Estimulação da testa</p>
            <ResponsivePlayer url="93515553_2905964176146592_5721245979890417664_n.mp4" />
          </div>
          <div className="col-6">
            <p>Estimulação do olho</p>
            <ResponsivePlayer url="92991474_693535984735930_6435654742369632256_n.mp4" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Estimulação da boca e nariz</p>
            <ResponsivePlayer url="92996122_218388046156541_8443100608021397504_n.mp4" />
          </div>
        </div>
      </div>
    </div>
  );
}
