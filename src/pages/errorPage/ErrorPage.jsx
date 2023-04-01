import "./errorPage.css";
import logo from "../../assets/images/welcomeLogo.png";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../../api/Rule_auth_users";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <section className="errorContainer">
      <img className="errorImage" src={logo} />
      <h1 className="errorTitle">No se puede encontrar la página.</h1>
      <h3 className="errorSubTitle">
        Intenta recargar la página o haz click en el botón debajo para ir a la
        página principal.
      </h3>
      <button
        className="errorButton"
        onClick={() => {
          isAuth ? navigate("/home") : navigate("/login");
        }}
      >
        Volver
      </button>
    </section>
  );
}

export default ErrorPage;
