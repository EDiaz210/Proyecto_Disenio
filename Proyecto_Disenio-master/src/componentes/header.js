import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/header.css';
import barritaImage from '../Imagenes/barritaImage.png';
import 'bootstrap/dist/js/bootstrap.bundle.min';




const Header = () => {
  return (
    <header className="header">
      <img src={barritaImage} alt="Barrita Romulo" className="barrita-image" />
      
      <nav className="navbar  d-lg-none">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="emphasis">
          <div className="p-4">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/catalogo" className="nav-link">Catalogo</Link></li>
              <li className="nav-item"><Link to="/promocion" className="nav-link">Promociones</Link></li>
              <li className="nav-item"><Link to="/favoritos" className="nav-link">Favoritos</Link></li>
              <li className="nav-item"><Link to="/carrito" className="nav-link">Carrito</Link></li>
              <li className="nav-item"><Link to="/login" className="nav-link">Login/Registro</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <nav className="d-none d-lg-block flex-nav" >
        <ul className=" me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/catalogo" className="nav-link">Catalogo</Link></li>
          <li className="nav-item"><Link to="/promocion" className="nav-link">Promociones</Link></li>
          <li className="nav-item"><Link to="/favoritos" className="nav-link">Favoritos</Link></li>
          <li className="nav-item"><Link to="/carrito" className="nav-link">Carrito</Link></li>
          <li className="nav-item"><Link to="/login" className="nav-link">Login/Registro</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
