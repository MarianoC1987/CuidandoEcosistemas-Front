import "./menuBar.css";
import flower from "../../assets/images/local_florist.png";
import home from "../../assets/images/Home.png";
import add from "../../assets/images/add.png";
import chat from "../../assets/images/speech-bubble.png";

function MenuBar() {
  return (
    <div className="menu-main">
      <section className="menu-images">
        <div>
          <img src={home} alt="home-icon" />
        </div>
        <div>
          <img src={chat} alt="chat-icon" />
        </div>
        <div>
          <img src={add} alt="add-icon" />
        </div>
        <div>
          <img src={flower} alt="flower-icon" />
        </div>
      </section>
      <p></p>
    </div>
  );
}

export default MenuBar;
