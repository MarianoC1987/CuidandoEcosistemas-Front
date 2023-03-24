import "./home.css";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo-sinletras.png";
import MenuBar from "../../components/MenuBar/MenuBar";
import Borders from "../../components/Borders/Borders";
import AccountBox from "../../assets/images/account_box.svg";
import Search from "../../assets/images/Search.svg";
import Clock from "../../assets/images/Clock.svg";
import Add from "../../assets/images/add.svg";
import Bulb from "../../assets/images/Idea.svg";

function Home() {
  const [searchOn, setSearchOn] = useState(false);
  const [recents, setRecents] = useState([]);
  //const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("listItem"));
    if (items) {
      setRecents(items);
    }
  }, []);

  const addRecent = () => {
    setRecents([...recents, searchText.value]);
  };

  //Leo el ID que puse en el input (searchText) para que tome el valor del input real time
  const handleChange = () => {
    searchText.value !== "" ? setSearchOn(true) : setSearchOn(false);
  };

  useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(recents));
  }, [recents]);

  return (
    <main className="homeMain">
      <Borders className="homeBorders" />
      <div className="homeLogo">
        <img src={logo} />
      </div>
      <div className="homeSections">
        <img className="homeSectionOne" src={AccountBox} />
        <form className="homeSectionTwo" onChange={handleChange}>
          <input
            className="homeSearch"
            type="text"
            placeholder="Buscar"
            name="search"
            id="searchText"
          ></input>
          <img src={Search} alt="search icon" onClick={addRecent} />
        </form>
        {searchOn === false ? (
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
        ) : (
          <section className="homeSectionFour">
            <h2>Recientes</h2>
            <ul>
              {recents.map((item) => {
                return <li key={item}>{[item]}</li>;
              })}
            </ul>
          </section>
        )}
      </div>
      <MenuBar />
    </main>
  );
}

export default Home;
