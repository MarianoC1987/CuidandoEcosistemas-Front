import React from "react";
import "../../components/Notifications/notifications.css";
import SettingFrame from "../SettingFrame/SettingFrame";
import Cubism from "../CubismBackground/Cubism";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { useNavigate } from "react-router-dom";

function Notifications() {
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
      <section className="notifications">
        <h1>Notificaciones</h1>
      </section>
      <SettingFrame />
      <section>
        <p className="reminder">Recordatorios</p>
        <p className="messages">Mensajes</p>
        <p className="news">Novedades</p>
      </section>

      <section className="frame" />
    </>
  );
}

export default Notifications;
