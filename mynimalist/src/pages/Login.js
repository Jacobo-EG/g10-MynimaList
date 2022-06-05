import React, { useState, useContext, useEffect } from "react";
import axios from 'axios';
import qs from 'qs';
import '../styles/Login.css';
import LogoWriting from "../components/LogoWriting";
import Theme from "../components/Theme";
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context';

function Login() {

  // Utilizo el context para guardar el token en el contexto 
  const { setTokenA } = useContext(TaskContext)

  // States necesarios para iniciar sesion
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Controlo el boton de registrarse
  let navigate = useNavigate();
  const handleClickSignUp = () => {
    navigate('/registro');
  };

  // Funcion para manejar el inicio de seision y enviar la peticion al backend
  const handleClickSignIn = () => {

    let body = { username: username, password: password }
    axios.post('http://mynimalistbackend.herokuapp.com/login', qs.stringify(body), 
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then( response => {
      localStorage.setItem("token", response.data.access_token)
      setTokenA(response.data.access_token)  
      navigate('/main')
    }).catch( e => {
      if(e.response.status === 401) {
        alert("Usuario o contraseña incorrectos")
      }
    })
    
  };

  // Funcion para llevarnos al about us
  const handleClickAboutUs = () => {
    navigate('/sobre-nosotros')
    }

  // Con esto controlo que si ya tengo un token guardado no tenga que iniciar sesión de nuevo
  useEffect( () => {
    if(localStorage.getItem("token") != "no") {
      setTokenA(localStorage.getItem("token"))
      navigate('/main')
    }
  })
  
    return ( // Devuelvo el logo, el formulario de inicio de sesión y los botones
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
            Sobre nosotros
          </button>
          <span className="theme">
            <Theme />
          </span>
      </div>
    );
  
}

export default Login;
