import React from "react";
import "../../components/Conditions/conditions.css";
import SettingFrame from "../SettingFrame/SettingFrame";
import Cubism from "../CubismBackground/Cubism";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { useNavigate } from "react-router-dom";

function Conditions() {
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
      <section className="conditions">
        <h1>Terminos y Condiciones</h1>
      </section>
      <SettingFrame />
      <section>
        <p className="terms">
          Esta aplicación movil es propiedad y está operado por Estefania
          Mochkofsky. Estos Términos establecen los términos y condiciones bajo
          los cuales tu puedes usar nuestra aplicación y servicios ofrecidos por
          nosotros. Esta aplicación ofrece a los visitantes el acceso a
          información solicitada a partir de la busqueda via escrito o con la
          camara para poder saber sobre distinta flora de nuestro ecosistema.
        </p>
      </section>

      <section className="frameTerms" />
    </>
  );
}

export default Conditions;
