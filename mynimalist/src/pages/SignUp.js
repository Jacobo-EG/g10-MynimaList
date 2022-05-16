import React, { useState } from "react";
import axios from "axios";
import "../styles/SignUp.css";
import LogoWriting from "../components/LogoWriting";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [mailReg, setMailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  // const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  // if(emailRegex.test(mailReg)) {
  //   alert("correcto")
  // } else {
  //   alert("nofunciona")
  // }

  let navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/");
  };

  const handleClickSignUp = () => {
    axios
      .post("http://localhost:8080/registration", {
        username: usernameReg,
        email: mailReg,
        password: passwordReg,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e.response);
      });
  };

  return (
    <div className="login-container">
      <LogoWriting />
      <form>
        <div className="user-container">
          <input
            type="text"
            value={mailReg}
            onChange={(e) => {
              setMailReg(e.target.value);
            }}
          />
          <label>Correo electronico</label>
        </div>
        <div className="user-container">
          <input
            type="text"
            value={usernameReg}
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
          />
          <label>Usuario</label>
        </div>
        <div className="user-container">
          <input
            type="password"
            value={passwordReg}
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
          <label>Contraseña</label>
        </div>
        <button type="button" className="sign-in" onClick={handleClickSignIn}>
          Iniciar sesion
        </button>
        <button type="button" className="sign-up" onClick={handleClickSignUp}>
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default SignUp;
