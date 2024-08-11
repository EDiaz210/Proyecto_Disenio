import React from 'react';
import product1 from '../Imagenes/producto1.png';
import product2 from '../Imagenes/producto2.png';
import product3 from '../Imagenes/producto3.png';
import product4 from '../Imagenes/producto4.png';
import product5 from '../Imagenes/producto7.png';
import product6 from '../Imagenes/producto6.png';
import Carusel from './Carusel';
import '../estilos/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <div>
      <Carusel />
      <section className="text-center mb-10">
        <h2>"Corre hacia el estilo: ¡Nuevas zapatillas deportivas en oferta!"</h2>
      </section>
      <section>
        <div className="row">
          <div className="col-md-4 mb-10">
            <div className="card">
              <img src={product1} className="card-img-top" alt="Imagen 1" />
              <div className="card-body">
                <p className="card-text text-center">Cómodo</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={product2} className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <p className="card-text text-center">Resistente</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={product3} className="card-img-top" alt="Imagen 3" />
              <div className="card-body">
                <p className="card-text text-center">Espectacular</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={product4} className="card-img-top" alt="Imagen 4" />
              <div className="card-body">
                <p className="card-text text-center">Con estilo</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={product5} className="card-img-top" alt="Imagen 5" />
              <div className="card-body">
                <p className="card-text text-center">Innovador</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={product6} className="card-img-top" alt="Imagen 6" />
              <div className="card-body">
                <p className="card-text text-center">Diseño moderno</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

