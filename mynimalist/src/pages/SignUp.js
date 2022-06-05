import React, { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import LogoWriting from "../components/LogoWriting";
import { useNavigate } from "react-router-dom";
import Theme from "../components/Theme";

function SignUp() {
  // States necesarios
  const [mailReg, setMailReg] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  // States necesarios para comprobar que todos los datos son correctos
  const [emailCorrecto, setEmailCorrecto] = useState(true);
  const [usernameCorrecto, setUsernameCorrecto] = useState(true);
  const [passwordCorrecta, setPasswordCorrecta] = useState(true);
  // Regex para ver si el email es correcto
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  
  // Funcion para ir a inicio de sesion
  let navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/");
  };

  // Funcion para manejar el registro 
  const handleClickSignUp = () => {
    // Si todos los datos son correctos procedo a hacer la peticion al backend
    if(emailRegex.test(mailReg) && usernameReg.length >= 4 && passwordReg.length >= 6) { 
      axios
      .post("http://mynimalistbackend.herokuapp.com/registration", {
        username: usernameReg,
        email: mailReg,
        password: passwordReg,
      })
      .then((response) => {
        navigate("/");
      })
      .catch((e) => {
        // Capturo el error y aviso al usuario
        if(e.response.status === 500) {
          alert("Ya existe un usuario con el mismo nombre de usuario");
        }
      });
    } 
  };

  return ( // Devuelvo el logo, el formulario y los botones
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
              !emailCorrecto && <p className="error">Email no válido</p>
            }
          <label>Correo electrónico</label>
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
