import "./forum.css";
import logo from "../../assets/images/logo-sinletras.png";
import Cubism from "../../components/CubismBackground/Cubism";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Rule_forum from "../../api/Rule_forum";

function Forum() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const showPublications = async () => {
    const publications = await Rule_forum.getAllPublications();
    setList(publications);
  };

  useEffect(() => {
    showPublications();
  }, []);

  return (
    <>
      <Cubism className="forumBack" />
      <section className="forumMain">
        <div className="forumPics">
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="Flecha"
            onClick={() => {
              navigate("/home");
            }}
          />
          <img
            className="forumLogo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>

        <div className="forumHeader">
          <h1>Foro</h1>
        </div>
        <div className="forumPost">
          <h3>Comparti tu experiencia aca</h3>
        </div>
        <div className="forumArticles">
          {list?.map((item) => (
            <article className="article">
              <p>{item.title}</p>
              <p>{item.text}</p>
              <p>{item.user}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Forum;
