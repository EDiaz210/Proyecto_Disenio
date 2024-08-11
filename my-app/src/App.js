import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Añadir las importaciones necesarias
import Header from './componentes/header';
import Footer from './componentes/footer';
import ProductGrid from './componentes/ProductGrid';
import Login from './componentes/login';
import Registro from './componentes/registro';
import ProductCatalog from './componentes/catalogo';
import Promocion from './componentes/Promocion';
import Carrito from './componentes/Carrito';
import Olvidar from './componentes/OlvidarContra';
import Favoritos from './componentes/favoritos';
import Home from './componentes/home';
import './App.css';



function App() {
  return (
    <Router> 
      <div className="App">
        <Header />


        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/catalogo" element={<ProductCatalog />} />
          <Route path="/promocion" element={<Promocion />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productgrid" element={<ProductGrid />} />
          <Route path="/olvidarContra" element={<Olvidar />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

