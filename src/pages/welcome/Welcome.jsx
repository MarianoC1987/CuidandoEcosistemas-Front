import "./welcome.css";
import borders from "../../assets/images/NatureBorders.png";
import logo from "../../assets/images/welcomeLogo.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isAuth } from "../../api/Rule_auth_users";

function Welcome() {
  const navigate = useNavigate();

  function redirectLogin() {
    navigate("login");
  }

  function redirectHome() {
    navigate("home");
  }

  useEffect(() => {
    setTimeout(isAuth ? redirectHome : redirectLogin, 3000);
  }, []);

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
