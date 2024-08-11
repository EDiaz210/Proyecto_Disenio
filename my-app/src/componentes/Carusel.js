import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../estilos/Carusel.css';

const Carusel = () => {
  const imagenesPromocionales = [
    'https://cazaofertas.com.mx/wp-content/uploads/2019/08/Promoda-Calzado.jpg',
    'https://promociondescuentos.com/wp-content/uploads/2016/02/Suburbia-zapatos.jpg',
    'https://i.pinimg.com/originals/27/d0/23/27d023a27dd46a27b3dc447a4c7586eb.jpg'
  ];

  return (
    <div className="header">
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
        {imagenesPromocionales.map((imagen, indice) => (
          <div key={indice}>
            <img src={imagen} alt={`Banner Promocional ${indice + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Carusel;

