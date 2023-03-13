import "./home.css";
import borders from "../../assets/images/NatureBorders.png";
import logo from "../../assets/images/logo-sinletras.png";
import MenuBar from "../../components/MenuBar/MenuBar";

function Home() {
  return (
    <main className="home-main">
      <div className="home-borders">
        <img src={borders} />
        <div className="home-logo">
          <img src={logo} />
        </div>
        <section>usuario</section>
        <section>search-bar</section>
        <secion>3 cuadrados</secion>
        <section></section>
      </div>
      <MenuBar />
    </main>
  );
}

export default Home;
