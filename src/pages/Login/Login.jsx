import React from "react";
import "./Login.css";
import logo from "../../assets/images/welcomeLogo.png";
import UserLogin from "../../Components/UserLogin/UserLogin";
import LoginSocialNetwork from "../../Components/LoginSocialNetwork/LoginSocialNetwork";

function Login() {
  return (
    <>
      <main className="loginMain">
        <section className="loginLogo">
          <img src={logo} />
        </section>
        <UserLogin />
        <LoginSocialNetwork />
        <p />
      </main>
    </>
  );
}

export default Login;