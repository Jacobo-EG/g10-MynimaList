import React, { useState, useContext } from "react";
import axios from 'axios';
import '../styles/SignUp.css';
import LogoWriting from "../components/LogoWriting";
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context';

function SignUp() {
  const { setTokenA } = useContext(TaskContext)

  const [mailReg, setMailReg] = useState('');
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');


  let navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/');
  };

  const handleClickSignUp = () => {
    axios.post('http://localhost:8080/registration', 
    {
      username : usernameReg, 
      email : mailReg,
      password : passwordReg
    }).then( response => {
        navigate('/')
        console.log(response.data)
    }).catch( e => {
        console.log(e.response)
    })
  };

  return (
    <div className="login-container">
      <LogoWriting />
      <form>
      <div className="user-container">
          <input
            type="text"
            value={mailReg}
            onChange = { (e) => {
              setMailReg(e.target.value);
              console.log(mailReg);
            }}
          />
          <label>Correo electronico</label>
        </div>
        <div className="user-container">
          <input
            type="text"
            value={usernameReg}
            onChange = { (e) => {
              setUsernameReg(e.target.value);
              console.log(usernameReg);
            }}
          />
          <label>Usuario</label>
        </div>
        <div className="user-container">
          <input
            type="password"
            value={passwordReg}
            onChange = { (e) => {
              setPasswordReg(e.target.value);
              console.log(passwordReg);
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

export default SignUp;