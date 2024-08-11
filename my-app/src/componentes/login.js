import React, { useState } from "react";
import "../estilos/login.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const iniciar = (e) => { 
    e.preventDefault();

    if (correo.includes("@romulo.com") && contraseña === "romulo123") {
      alert("Bienvenido Señor/a ESFOT");
      window.location.href = "/";
    } else {
      alert("Usuario o contraseña incorrectos. Por favor ingrese nuevamente");

      if (!correo.includes("@romulo.com")) {
        document.querySelector('.correo1').classList.add('error');
      }
      
      if (contraseña !== "romulo123") {
        document.querySelector('.contra').classList.add('error');
      }
    }
  };

  const cancelar = () => {
    alert("Proceso Cancelado");
    setCorreo('');
    setContraseña('');
  };

  return (
    <div className='container d-flex justify-content-center align-items-center' id="login">
      <div className='card p-4 shadow-lg'>
        <form className="formularioLogin" onSubmit={iniciar}>
          <nav className="mb-4">
            <h3 className="text-center">Inicio de sesión</h3>
          </nav>
          <div className="form-group mb-3">
            <label htmlFor="usuario">
              <h6>Ingrese su correo:</h6>
            </label>
            <input
              id='usuario'
              className='form-control correo1'
              type='email'
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="contra">
              <h6>Ingrese su contraseña:</h6>
            </label>
            <input
              id='contra'
              className='form-control contra'
              type='password'
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <nav className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary" id='anadir'>Iniciar sesión</button>
            <button type="button" className="btn btn-secondary" id="eliminar" onClick={cancelar}>Cancelar</button>
          </nav>
          <div className="mt-3 d-flex justify-content-between">
            <a href="./olvidarContra" className="text-muted">¿Has olvidado tu contraseña?</a>
            <a href="./registro" className="text-muted">Registrarse</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

