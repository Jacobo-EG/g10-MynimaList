import React, { useState, useContext } from "react";
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
    let body = { "user": usernameReg, "password": passwordReg }
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
            value={mailReg}
            onChange = { (e) => {
              setMailReg(e.target.value);
              console.log(mailReg);
            }}
          />
          <label>Correo Electronico</label>
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