import React, { useState } from "react";
import '../estilos/RecuperacionContrasenia.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RecuperacionContrasenia() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
    } else {
      setError("");
      alert("Contraseña actualizada con éxito");
    }
  };

  return (
    <div className="recuperacionContra container">
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
        <div className="form-group">
          <label htmlFor="password">Nueva Contraseña</label>
          <div className="password-input input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-control"
              required
            />
            <div className="input-group-append">
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="btn btn-outline-secondary"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmación de la Contraseña</label>
          <div className="password-input input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="form-control"
              required
            />
          </div>
        </div>

        {error && <p className="text-danger font-weight-bold">{error}</p>}

        <button type="submit" className="btn btn-primary btn-block mt-4">
          Actualizar Contraseña
        </button>
      </form>
    </div>
  );
}

export default RecuperacionContrasenia;


