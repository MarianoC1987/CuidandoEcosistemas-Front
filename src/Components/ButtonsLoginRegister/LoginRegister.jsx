import React from 'react';
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

  return (
    <div className='divStyles'>

      <form  className='formStyles'>
          <label className='inputLabel' id='inputLabel1'>
            <input class="inputText" type="text" name="name"  />
          </label>
          <label className='inputLabel' id='inputLabel2'>
            <input class="inputText" type="text" name="" />
          </label>
          <label className='inputLabel'  id='inputLabel3'>
            <input class="inputText" type="password" name="password" />
          </label>
          <input id="buton1" type="submit" value="Inciar Sesión" />    
          <input id="buton2" type="submit" value="Register" />    

        </form>

    </div>
  )
}

export default LoginRegister;

