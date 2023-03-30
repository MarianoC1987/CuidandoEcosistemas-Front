import React from "react";
import "../../components/MyProfile/myProfile.css";
import SettingFrame from "../SettingFrame/SettingFrame";
import Cubism from "../CubismBackground/Cubism";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { useNavigate } from "react-router-dom";

function MyProfile() {
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
      <section className="profile">
        <h1>Mi perfil</h1>
      </section>
      <SettingFrame />
      <section>
        <p className="textProfile">Foto de perfil</p>
        <p className="textName">Nombre de usuario</p>
        <p className="textDescription">Descripción</p>
      </section>

      <section className="frame" />
    </>
  );
}

export default MyProfile;
