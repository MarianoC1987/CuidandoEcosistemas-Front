import React from "react";
import "../LoginSocialNetwork/LoginSocialNetwork.css";
import { AiOutlineGoogle, AiFillFacebook, AiFillApple } from "react-icons/ai";

function LoginSocialNetwork() {
  return (
    <>
      <section className="loginButton">
        <button className="buttonOne">
          <AiOutlineGoogle size={30} />
          <h1>Iniciar Sesión con tu cuenta de Google</h1>
        </button>
        <button className="buttonTwo">
          <AiFillFacebook size={28} />
          <h1>Iniciar Sesión con tu cuenta de Facebook</h1>
        </button>
        <button className="buttonThree">
          <AiFillApple size={30} />
          <h1>Iniciar Sesión con tu cuenta de ICloud</h1>
        </button>
      </section>
    </>
  );
}

export default LoginSocialNetwork;
