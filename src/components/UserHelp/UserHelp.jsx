import React from "react";
import "../../components/UserHelp/userHelp.css";
import SettingFrame from "../SettingFrame/SettingFrame";
import Cubism from "../CubismBackground/Cubism";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { useNavigate } from "react-router-dom";

function UserHelp() {
  const navigate = useNavigate();
  return (
    <>
      <Cubism className="cubism" />
      <img
        className="arrowProfile"
        src={arrowLeft}
        alt="Flecha"
        onClick={() => {
          navigate("/UserProfile");
        }}
      />
      <section className="aidUser">
        <h1>Ayuda</h1>
      </section>
      <SettingFrame />
      <section>
        <p
          className="textPlants"
          onClick={() => {
            navigate("/MyPlants");
          }}
        >
          Mis plantas
        </p>
        <p
          className="textForo"
          onClick={() => {
            navigate("/forum");
          }}
        >
          Foro
        </p>
        <p
          className="textSearch"
          onClick={() => {
            navigate("/home");
          }}
        >
          Buscador
        </p>
      </section>

      <section className="frame" />
    </>
  );
}

export default UserHelp;
