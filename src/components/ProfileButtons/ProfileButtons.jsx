import React from "react";
import { useNavigate } from "react-router-dom";
import "../../components/ProfileButtons/profileButtons.css";

function ProfileButtons() {
  const navigate = useNavigate();
  return (
    <>
      <section>
        <button
          className="myProfile"
          onClick={() => {
            navigate("/MyProfile");
          }}
        >
          Mi perfil
        </button>
        <button
          className="aid"
          onClick={() => {
            navigate("/UserHelp");
          }}
        >
          Ayuda
        </button>
        <button
          className="others"
          onClick={() => {
            navigate("/Notifications");
          }}
        >
          Notificaciones
        </button>
      </section>
    </>
  );
}

export default ProfileButtons;
