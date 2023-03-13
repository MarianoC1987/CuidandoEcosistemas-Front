import React from "react";
import "../UserLogin/UserLogin.css";
import { useForm } from "react-hook-form";

function UserLogin() {
  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button className="buttonRegister" type="submit">
          Registrarse
        </button>
      </form>
    </>
  );
}

export default UserLogin;
