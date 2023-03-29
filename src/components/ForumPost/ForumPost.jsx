import "./forumPost.css";
import Cubism from "../CubismBackground/Cubism";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import logo from "../../assets/images/logo-sinletras.png";
import { useForm } from "react-hook-form";
import Rule_forum from "../../api/Rule_forum";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function ForumPost() {
  const navigate = useNavigate();

  function redirectForum() {
    navigate("/forum");
  }
  const onSubmit = async (data) =>
    await Rule_forum.NewPost(data).then((response) => {
      swal("La publicacion se realizo con exito", {
        icon: "success",
      }) &&
        setTimeout(redirectForum, 2000).catch((error) => {
          swal(error, {
            icon: "error",
          });
        });
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Cubism className="postBack" />
      <section className="postMain">
        <div className="postPics">
          <img
            className="arrowLeft"
            src={arrowLeft}
            alt="Flecha"
            onClick={() => {
              navigate("/home");
            }}
          />
          <img
            className="postLogo"
            src={logo}
            alt="logo"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        <div className="postHeader">
          <h1>Comparte tu experiencia</h1>
        </div>
        <form className="postForm" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputTitle"
            type="text"
            placeholder="Titulo de la publicacion"
            required
            {...register("title", { required: true, minLength: 4 })}
          />
          {errors.title && <p>El titulo es requerido</p>}
          <input
            className="inputSubTitle"
            type="text"
            placeholder="Subtitulo"
            required
            {...register("subtitle", { minLength: 4 })}
          />
          <textarea
            className="inputText"
            type="text"
            name="pass"
            minLength="4"
            placeholder="Ingrese su consulta"
            required
            {...register("text", { required: true, minLength: 8 })}
          ></textarea>
          {errors.text && <p>Este campo es requerido</p>}

          <button className="inputButton" type="submit">
            Publicar en el foro
          </button>
        </form>
      </section>
    </>
  );
}

export default ForumPost;
