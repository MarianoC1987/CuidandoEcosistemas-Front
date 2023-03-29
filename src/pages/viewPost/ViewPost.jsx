import "./viewPost.css";
import { useEffect, useState } from "react";
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

  /* const postDetails = async (post) => {
    const {
      data: { data },
    } = await Rule_forum.viewPostId(post)
      .then(() => {
        setDetails(data);
      })
      .catch((error) => {
        swal(error, {
          icon: "error",
        });
      });
  }; */

  useEffect(() => {
    postDetails(id);
  }, []);

  const postDetails = async (post) => {
    await Rule_forum.viewPostId(post)
      .then((result) => {
        setDetails(result);
      })
      .catch((error) => {
        swal(error, {
          icon: "error",
        });
      });
  };

  /*   const postDetails = async (post) => {
    const {
      data: { data },
    } = await Rule_forum.viewPostId(post);
    setDetails(data);
  }; */

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
          details?.map((item) => (
            <article>
              <div>
                <p>Nombre + escribio la siguiente consulta el dia</p>
                <p>Fecha</p>
              </div>
              <h1>Titulo</h1>
              <h2>Subtitulo</h2>
              <p>{item.text}</p>
              <div>
                <img />
              </div>
            </article>
          ))
        ) : (
          <p>No se puede acceder a la publicacion</p>
        )}
      </section>
    </>
  );
}
export default ViewPost;
