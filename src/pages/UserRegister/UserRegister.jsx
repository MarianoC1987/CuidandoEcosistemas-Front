import React from 'react'
import LoginRegister from '../../Components/LoginRegister/LoginRegister';
import UserLogin from '../../Components/UserLogin/UserLogin';
import "./userregister.css";


function UserRegister() {
  return (
    <main className="userRegister-borders">
      <LoginRegister/>
      {/* <UserLogin/> */}
    </main>
  )
}

export default UserRegister;
