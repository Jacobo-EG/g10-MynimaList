import React, { useState, useContext } from "react";
import '../styles/Login.css';
import LogoWriting from "../components/LogoWriting";
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context';

function Login() {

  const { setTokenA } = useContext(TaskContext)

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
    setTokenA("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZhcm8iLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW4iLCJleHAiOjE2NTI1MjU2NTR9.b13YNFwzUprW7ftMXgIM-yrEmssFlC0K-4tqzXy_DFk")
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
