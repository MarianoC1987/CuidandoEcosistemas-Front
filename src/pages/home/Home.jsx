import "./home.css";
import logo from "../../assets/images/logo-sinletras.png";
import MenuBar from "../../components/MenuBar/MenuBar";
import Borders from "../../components/Borders/Borders";
import AccountBox from "../../assets/images/account_box.svg";
import Search from "../../assets/images/Search.svg";
import Clock from "../../assets/images/Clock.svg";
import Add from "../../assets/images/add.svg";
import Bulb from "../../assets/images/Idea.svg";

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
          <div>
            <p></p>
            <img src={Clock} />
            <p>Recordatorios</p>
          </div>
          <div>
            <p></p>
            <img src={Add} />
            <p>Agreagar</p>
          </div>
          <div>
            <p></p>
            <img src={Bulb} />
            <p>Cuidados</p>
          </div>
        </section>
        <section></section>
      </div>
      <MenuBar />
    </main>
  );
}

export default Home;
