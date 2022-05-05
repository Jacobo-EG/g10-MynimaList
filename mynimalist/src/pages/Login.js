import React, { useState } from "react";
import '../styles/Login.css';
import LogoWriting from "../components/LogoWriting";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate('/registro');
  };

  const handleClickSignIn = () => {
    let body = { "user": username, "password": password }
    console.log(body);
    navigate('/main')
  };

  return (
    <div className="login-container">
      <LogoWriting />
      <form>
        <div className="user-container">
          <input
            type="text"
            value={username}
            onChange = { (e) => {
              setUsername(e.target.value);
              console.log(username);
            }}
          />
          <label>Usuario</label>
        </div>
        <div className="user-container">
          <input
            type="password"
            value={password}
            onChange = { (e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <label>Contraseña</label>
        </div>
        <button
          type="button"
          className="sign-in"
          onClick={handleClickSignIn}
        >
          Iniciar sesion
        </button>
        <button
          type="button"
          className="sign-up"
          onClick={handleClickSignUp}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Login;
