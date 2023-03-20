import "./home.css";
import logo from "../../assets/images/logo-sinletras.png";
import MenuBar from "../../components/MenuBar/MenuBar";
import Borders from "../../components/Borders/Borders";
import AccountBox from "../../assets/images/account_box.png";
import Search from "../../assets/images/Search.png";

function Home() {
  return (
    <main className="homeMain">
      <Borders className="homeBorders" />
      <div className="homeLogo">
        <img src={logo} />
      </div>
      <div className="homeSections">
        {/* <section className="home-sectionOne">usuario</section> */}
        <img className="homeSectionOne" src={AccountBox} />
        <section className="homeSectionTwo">
          <input
            className="homeSearch"
            type="text"
            placeholder="Buscar"
            name="search"
          ></input>
          <img src={Search} alt="search icon" />
        </section>
        <section className="homeSectionThree">
          <div></div>
          <div></div>
          <div></div>
        </section>
        <section></section>
      </div>
      <MenuBar />
    </main>
  );
}

export default Home;
