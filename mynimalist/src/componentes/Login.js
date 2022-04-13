import React from "react";
import '../hojas-de-estilo/Login.css';
import LogoWriting from "./LogoWriting";

function Login() {
  return (
    <div class="login-container">
      <LogoWriting />
      <form>
        <div class="user-container">
          <input type="text" name="" required="" />
          <label>Usuario</label>
        </div>
        <div class="user-container">
          <input type="password" name="" required="" />
          <label>Contraseña</label>
        </div>
        <a className='sign-in'href="#">
          Iniciar sesion
        </a>
        <a className='sign-up'href="#">
          Registrarse
        </a>
      </form>
    </div>
  );
}

export default Login;
