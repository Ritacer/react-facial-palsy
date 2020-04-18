import React, { useState } from "react";
import ResponsivePlayer from "./responsive-player";
import "./FacialPalsy.css";

export default function FacialPalsy() {
  const [language, setLanguage] = useState("portuguese");

  function showEnglish(event) {
    event.preventDefault();
    setLanguage("english");
  }
  function showPortuguese(event) {
    event.preventDefault();
    setLanguage("portuguese");
  }

  if (language === "portuguese") {
    return (
      <div className="FacialPalsy">
        <div className="newContainer">
          <div className="translation">
            <h1>Paralisia Facial</h1>
            <h3>
              Português
              <span role="img" aria-label="flagPt">
                🇵🇹
              </span>
              /
              <a href="/" onClick={showEnglish}>
                English
              </a>
              <span role="img" aria-label="flagGb">
                🇬🇧
              </span>
            </h3>
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
  } else {
    return (
      <div className="FacialPalsy">
        <div className="newContainer">
          <div className="translation">
            <h1>Facial Palsy</h1>
            <h3>
              <a href="/" onClick={showPortuguese}>
                Português
              </a>
              <span role="img" aria-label="flagPt">
                🇵🇹
              </span>
              /English
              <span role="img" aria-label="flagGb">
                🇬🇧>
              </span>
            </h3>
          </div>
          <div className="main">
            <h2>Facial mimic</h2>
            <ResponsivePlayer url="mien93808444_233906554511155_27597527108812800_n.mp4" />
          </div>
          <h2>Ice stimulation</h2>
          <div className="row">
            <div className="col-6">
              <p>Forehead stimulation</p>
              <ResponsivePlayer url="foen93989830_1540926126086778_3109961792986546176_n.mp4" />
            </div>
            <div className="col-6">
              <p>Eye stimulation</p>
              <ResponsivePlayer url="eyen93802483_660272868138094_7351310979256287232_n.mp4" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Mouth and nose stimulation</p>
              <ResponsivePlayer url="mnen93962226_222067342346973_3226222473175367680_n.mp4" />
            </div>
          </div>
          <div className="massage">
            <h2>Face massage</h2>
            <ResponsivePlayer url="maen93884380_1735927929880991_4399563888689938432_n.mp4" />
          </div>
        </div>
      </div>
    );
  }
}
