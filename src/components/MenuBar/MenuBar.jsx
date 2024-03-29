import "./menuBar.css";
import flower from "../../assets/images/local_florist.svg";
import home from "../../assets/images/Home.svg";
import add from "../../assets/images/add.svg";
import chat from "../../assets/images/speech-bubble.svg";
import { Link, useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();
  return (
    <div className="menuMain">
      <section className="menuImages">
        <div
          onClick={() => {
            navigate("/home");
          }}
        >
          <img src={home} alt="home-icon" />
        </div>

        <div
          onClick={() => {
            navigate("/forum");
          }}
        >
          <img src={chat} alt="chat-icon" />
        </div>
        <div
          onClick={() => {
            navigate("/myplants/guardarplanta");
          }}
        >
          <img src={add} alt="add-icon" />
        </div>

        <div
          onClick={() => {
            navigate("/myplants");
          }}
        >
          <img src={flower} alt="flower-icon" />
        </div>
      </section>
      <p></p>
    </div>
  );
}

export default MenuBar;
