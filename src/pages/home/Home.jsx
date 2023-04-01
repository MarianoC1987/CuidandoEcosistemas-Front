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
import ShowTreflePlants from "../../components/ShowTreflePlants/ShowTreflePlants";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [searchOn, setSearchOn] = useState(false);
  const [recents, setRecents] = useState([]);
  const [searchValue, setSearchValue] = useState({});

  useEffect(() => {
    const data = window.localStorage.getItem("listItem");
    if (data !== null) setRecents(JSON.parse(data));
  }, []);

  const addRecent = () => {
    window.localStorage.setItem(
      "listItem",
      JSON.stringify([...recents, searchText.value])
    );
    setRecents([...recents, searchText.value]);
  };

  const handleInput = () => {
    addRecent();
    setSearchValue({ search: searchText.value });
  };

  //Leo el ID que puse en el input (searchText) para que tome el valor del input real time
  const handleChange = () => {
    searchText.value !== "" ? setSearchOn(true) : setSearchOn(false);
  };

  return (
    <main className="homeMain">
      <Borders className="homeBorders" />
      <div className="homeLogo">
        <img src={logo} />
      </div>
      <div className="homeSections">
        <img
          className="homeSectionOne"
          src={AccountBox}
          onClick={() => {
            navigate("/UserProfile");
          }}
        />
        <form className="homeSectionTwo" onChange={handleChange}>
          <input
            className="homeSearch"
            type="text"
            placeholder="Buscar"
            name="search"
            id="searchText"
          ></input>
          <img src={Search} alt="search icon" onClick={handleInput} />
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
        ) : searchValue ? (
          <ShowTreflePlants searchValue={searchValue} recents={recents} />
        ) : (
          <section className="homeSectionFour">
            <h2>Recientes</h2>
            <ul>
              {recents?.map((item) => {
                return <li key={item}>{item}</li>;
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
