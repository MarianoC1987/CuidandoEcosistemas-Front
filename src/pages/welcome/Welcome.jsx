import "./welcome.css";
import borders from "../../assets/images/NatureBorders.png";
import logo from "../../assets/images/welcomeLogo.png";

function Welcome() {
  return (
    <main className="welcome-main">
      <div className="welcome-borders">
        <img src={borders} />
        <div className="welcome-logo">
          <img src={logo} />
        </div>
      </div>
      <h1>¡Hola!</h1>
      <p></p>
    </main>
  );
}

export default Welcome;
