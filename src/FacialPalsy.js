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
          <ResponsivePlayer url="mipt93886162_267201794457945_94678817418772480_n.mp4" />
        </div>
        <h2>Estimulação com gelo</h2>
        <div className="row">
          <div className="col-6">
            <p>Estimulação da testa</p>
            <ResponsivePlayer url="fopt94185452_255673565567968_8459799694271315968_n.mp4" />
          </div>
          <div className="col-6">
            <p>Estimulação do olho</p>
            <ResponsivePlayer url="eypt94163985_2636973926534545_1318350008327602176_n.mp4" />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Estimulação da boca e nariz</p>
            <ResponsivePlayer url="mnpt94055569_681992159223897_1985186390186393600_n.mp4" />
          </div>
        </div>
        <div className="massage">
          <h2>Massagem da face</h2>
          <ResponsivePlayer url="mapt92871985_843368219407879_6363956469590654976_n.mp4" />
        </div>
      </div>
    </div>
  );
}
