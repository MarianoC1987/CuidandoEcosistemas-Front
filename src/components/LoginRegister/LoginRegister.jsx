import React from "react";
import { useForm } from "react-hook-form";
import arrowLeft from "../../assets/images/arrow_back_ios.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../../api/Rule_auth_users";
import swal from "sweetalert";
import "./loginRegister.css";

function LoginRegister() {
  const navigate = useNavigate();

  function redirectLogin() {
    navigate("/login");
  }

  const onSubmit = async (data) =>
    await userRegister(data)
      .then(() => {
        swal("El usuario se regsitro correctamente", {
          icon: "success",
        });
        setTimeout(redirectLogin, 2000);
      })
      .catch((error) => {
        swal(error, {
          icon: "error",
        });
        //alert("No se registró correctamente");
        console.log(data);
      });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="divStyles">
      <header>
        <div className="header1">
          <Link to={`/login`}>
            <img className="arrowLeft" src={arrowLeft} alt="Flecha" />
          </Link>
          <h1 className="tittleRegister">Crear Nueva Cuenta</h1>
        </div>
      </header>
      <form className="formStyles" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="inputName"
          type="text"
          name="firstname"
          placeholder="Nombre"
          required
          {...register("firstname", { required: true })}
        />
        {errors.text && <p>Nombre de usuario es requerido</p>}
        <input
          className="inputLastName"
          type="text"
          name="lastname"
          placeholder="Apellido"
          required
          {...register("lastname", { required: true })}
        />
        {errors.text && <p>Apellido del usuario es requerido</p>}
        <input
          className="inputUser"
          type="email"
          placeholder="Usuario"
          required
          {...register("email", { required: true, minLength: 8 })}
        />
        {errors.email && <p>El email es requerido</p>}
        <input
          className="inputPassword"
          type="password"
          name="pass"
          minLength="8"
          maxLength="20"
          placeholder="Contraseña"
          required
          {...register("password", { required: true, minLength: 8 })}
        />
        {errors.password && (
          <p>La contraseña debe tener un minimo de 8 caracteres</p>
        )}

        <button
          className="buttonLogin"
          onClick={() => {
            navigate("/login");
          }}
        >
          Iniciar Sesión
        </button>

        <button className="buttonRegister" type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default LoginRegister;
