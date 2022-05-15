import React, { useState, useContext } from "react";
import axios from 'axios';
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
    setTokenA("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbHZhcm8iLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW4iLCJleHAiOjE2NTI2MTI5NzN9.dCuR4TjqkT67nfwlSG-ObpS694TMeyTbocxJZc0T8WU")
    navigate('/main')
    // axios.post('http://localhost:8080/login', 
    // {
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    // },
    // {
    //   username : username, 
    //   password : password
    // }).then( response => {
    //     navigate('/main')
    //     setTokenA(response.data)
    //     console.log(response.data)
    // }).catch( e => {
    //     console.log(e.response)
    // })

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
