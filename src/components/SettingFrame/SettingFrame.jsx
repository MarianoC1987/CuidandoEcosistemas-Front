import React from "react";
import "../../components/SettingFrame/settingFrame.css";
import logo from "../../assets/images/logo-sinletras.png";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import puntos from "../../assets/images/puntos.png";
import { useNavigate } from "react-router-dom";

function SettingFrame() {
  const navigate = useNavigate();
  return (
    <>
      <section className="header">
        <img
          className="arrow"
          src={arrowLeft}
          alt="Flecha"
          onClick={() => {
            navigate("/Home");
          }}
        />
        <img className="logo" src={logo} alt="logo" />
      </section>
      <section className="frameUser" />
      <section className="setting">
        <p>Configuración</p>
      </section>
      <img className="oval" src={puntos} />
      <section
        className="data"
        onClick={() => {
          navigate("/Conditions");
        }}
      >
        <p>Terminos y condiciones</p>
      </section>
    </>
  );
}

export default SettingFrame;
