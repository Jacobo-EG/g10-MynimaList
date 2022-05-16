import React, { useState, useContext } from "react";
import axios from 'axios';
import qs from 'qs';
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

    let body = { username: username, password: password }
    axios.post('http://localhost:8080/login', qs.stringify(body), 
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then( response => {
      setTokenA(response.data.access_token)  
      navigate('/main')
    }).catch( e => {
        if(e.response.status === 401) {
          alert("Usuario o contraseña incorrectos")
        }
    })

  };
  const handleClickAboutUs = () => {
    navigate('/sobre-nosotros')
    }

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
      <button
          type="button"
          className="about-us"
          onClick={handleClickAboutUs}
        >
          Sobre Nosotros
        </button>
    </div>
  );
}

export default Login;
