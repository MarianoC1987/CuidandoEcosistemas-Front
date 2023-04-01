import "./viewPost.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rule_forum from "../../api/Rule_forum";
import swal from "sweetalert";
import Cubism from "../../components/CubismBackground/Cubism";
import logo from "../../assets/images/logo-sinletras.png";
import arrowLeft from "../../assets/images/arrow_back_ios.png";

function ViewPost() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [details, setDetails] = useState();

  const postDetails = async (post) => {
    const {
      data: { data },
    } = await Rule_forum.viewPostId(post);
    setDetails(data).catch((error) => {
      swal(error, {
        icon: "error",
      });
    });
  };

  useEffect(() => {
    postDetails(id);
  }, []);

  console.log(details);

  return (
    <>
      <Cubism className="viewPostBack" />
      <section className="viewPostMain">
        <div className="viewPostPics">
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="Flecha"
            onClick={() => {
              navigate("/forum");
            }}
          />
          <img
            className="viewPostLogo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        {details != null || details != undefined ? (
          <article className="viewPostArticle">
            <div className="viewPostHeader">
              <p className="postName">
                <b>{details.user.firstname}</b>
              </p>
              <p className="postDate">{details.createdAt}</p>
            </div>
            <h1 className="postTitle">{details.title}</h1>
            <h2 className="postSubTitle">
              <i>{details.subtitle}</i>
            </h2>
            <p className="postText">
              <i>"{details.text}"</i>
            </p>
            <div className="postImgContainer">
              <img src={details.img} />
            </div>
          </article>
        ) : (
          <p>No se puede acceder a la publicacion</p>
        )}
        <form className="postComments">
          <input
            className="postInput"
            type="text"
            placeholder="Ingrese su comentario"
          ></input>
          <button className="postButton" type="submit">
            Comentar
          </button>
        </form>
      </section>
    </>
  );
}
export default ViewPost;
