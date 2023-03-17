import "./home.css";
import logo from "../../assets/images/logo-sinletras.png";
import MenuBar from "../../components/MenuBar/MenuBar";
import Borders from "../../components/Borders/Borders";

function Home() {
  return (
    <main className="home-main">
      <Borders className="home-borders" />
      <div className="home-logo">
        <img src={logo} />
      </div>
      {/* <section>usuario</section>
      <section>search-bar</section>
      <section>3 cuadrados</section>
      <section></section> */}
      <MenuBar />
    </main>
  );
}

export default Home;
