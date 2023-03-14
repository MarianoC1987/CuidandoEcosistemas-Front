import React from 'react';
import { useForm }  from "react-hook-form";
import arrowLeft from "./img/arrow_back_ios_new.svg";
import { Link } from "react-router-dom";

import "./loginRegister.css";

function LoginRegister() {

  // const formStyle = {
  //   color: "white",
  //   // backgroundColor: "DodgerBlue",
  //   padding: "10px",
  //   fontFamily: "Arial",
  //   display:"flex",
  //   flexDirection: "column",
  //   width: "100%",
  //   height: "100%"
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className='divStyles'>
      <header>
        <div className="header1">
        <Link to={`/welcome`}>

            <img className="arrowLeft" src={arrowLeft} alt="Flecha" />
        </Link>

         </div>
      </header>
      <form  className='formStyles'>
          <label className='inputLabel' id='inputLabel1'>
            <input 
              class="inputText" 
              type="text" 
              name="name"  
              {...register('name', { required: true })}
            />
            {errors.name && <p>Last name is required.</p>}
          </label>
          <label className='inputLabel' id='inputLabel2'>
            <input 
              class="inputText" 
              type="mail" 
              name="" 
              {...register('mail', { required: true })}
            />
          </label>
          <label className='inputLabel'  id='inputLabel3'>
            <input class="inputText" type="password" name="password" />
          </label>
          <input id="buton1" type="submit" value="Inciar Sesión" />    
          <button id="buton2" type="submit">
          Registrarse
          </button>    

        </form>

    </div>
  )
}

export default LoginRegister;

