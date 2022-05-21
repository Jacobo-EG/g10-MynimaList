import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import LogoWriting from "../components/LogoWriting";
import { useNavigate } from "react-router-dom";
import Theme from "../components/Theme";

function SignUp() {
  const [mailReg, setMailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [emailCorrecto, setEmailCorrecto] = useState(true);
  const [usernameCorrecto, setUsernameCorrecto] = useState(true);
  const [passwordCorrecta, setPasswordCorrecta] = useState(true);

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/");
  };

  const handleClickSignUp = () => {

    if(emailRegex.test(mailReg) && usernameReg.length >= 4 && passwordReg.length >= 6) {
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
    }
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
              setEmailCorrecto(emailRegex.test(mailReg));
            }}
          />
            {
              !emailCorrecto && <p className="error">Email no valido</p>
            }
          <label>Correo electronico</label>
        </div>
        <div className="user-container">
          <input
            type="text"
            value={usernameReg}
            onChange={(e) => {
              setUsernameReg(e.target.value);
              setUsernameCorrecto(usernameReg.length >= 3);
            }}
            />
            {
              !usernameCorrecto && <p className="error">El usuario debe tener al menos 4 carácteres</p>
            }
          <label>Usuario</label>
        </div>
        <div className="user-container">
          <input
            type="password"
            value={passwordReg}
            onChange={(e) => {
              setPasswordReg(e.target.value);
              setPasswordCorrecta(passwordReg.length >= 5)
            }}
          />
            {
              !passwordCorrecta && <p className="error">La contraseña debe tener al menos 6 carácteres</p>
            }
          <label>Contraseña</label>
        </div>
        <button type="button" className="sign-up" onClick={handleClickSignUp}>
          Registrarse
        </button>
        <button type="button" className="sign-in" onClick={handleClickSignIn}>
          Volver
        </button>
      </form>
      <Theme />
    </div>
  );
}

export default SignUp;
