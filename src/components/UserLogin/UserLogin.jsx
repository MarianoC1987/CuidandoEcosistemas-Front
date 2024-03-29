import React from "react";
import "../UserLogin/UserLogin.css";
import { useForm } from "react-hook-form";
import { loginSesion } from "../../api/Rule_auth_users";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";


function UserLogin() {
  const navigate = useNavigate();

  const onSubmit = async (data) =>
    await loginSesion(data)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        swal(error, {
          icon: "error",
        });
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="formLogin"> 
      <form  onSubmit={handleSubmit(onSubmit)}>
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

        <button className="buttonLogin" type="submit">
          Iniciar Sesión
        </button>

          <button className="buttonRegister" onClick={()=>{navigate('/register')}} >
            Registrarse
          </button>

      </form>
    </div>
  );
}

export default UserLogin;
