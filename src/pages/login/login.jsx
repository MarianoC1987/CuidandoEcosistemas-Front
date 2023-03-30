import React from "react";
import "./login.css";
import logo from "../../assets/images/welcomeLogo.png";
import UserLogin from "../../components/UserLogin/UserLogin";
import LoginSocialNetwork from "../../components/LoginSocialNetwork/LoginSocialNetwork";

function Login() {
  return (
    // <>
    <main className="loginMain">
      <section className="loginLogo">
        <img src={logo} />
      </section>
      <UserLogin />
      <LoginSocialNetwork />
      <p />
    </main>
    // </>
  );
}

export default Login;
