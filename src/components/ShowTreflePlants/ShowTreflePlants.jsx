import "./showTreflePlants.css";
import logo from "../../assets/images/logo-sinletras.png";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { useEffect, useState } from "react";
import Rule_trefle_api from "../../api/Rule_Trefle_api";
import { useNavigate, useParams } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import Borders from "../Borders/Borders";

function ShowTreflePlants() {
  const searchValue = useParams();
  const navigate = useNavigate();

  const [list, setList] = useState([]);

  const showTrefle = async (search) => {
    const data = await Rule_trefle_api.getAll(search);
    setList(data);
  };

  /* const showTrefle = async (search) => {
    const {
      data: {
        json: { data },
      },
    } = await Rule_trefle_api.getAll(search);
    setList(data);
  }; */

  useEffect(() => {
    showTrefle(searchValue);
  }, []);

  return (
    <main className="trefleContainer">
      <Borders />
      <div className="trefleMain">
        <div className="treflePics">
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="Flecha"
            onClick={() => {
              navigate("/home");
            }}
          />
          <img
            className="trefleLogo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        <section className="trefleCardContainer">
          {list.data?.map((item) => (
            <article className="trefleCard" key={item.id}>
              <div className="trefleImgContainer">
                <img src={item.image_url} className="trefleImg" />
              </div>
              <div className="trefleNames">
                <p className="trefleCommonName">
                  <b>{item.common_name}</b>
                </p>
                <p className="trefleScientificName">
                  <i>{item.scientific_name}</i>
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
      <MenuBar />
    </main>
  );
}
export default ShowTreflePlants;
