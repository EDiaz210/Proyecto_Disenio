import React, { useState } from 'react';
import '../estilos/catalogo.css';
import producto1 from '../Imagenes/producto1.png';
import producto2 from '../Imagenes/producto2.png';
import producto3 from '../Imagenes/producto3.png';
import producto4 from '../Imagenes/producto4.png';
import producto5 from '../Imagenes/producto5.png';
import producto6 from '../Imagenes/producto6.png';
import producto7 from '../Imagenes/producto7.png';
import producto8 from '../Imagenes/producto8.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const products = [
  {
    image: producto1,
    name: 'Bota deportiva denim combinada',
    price: '$51.99',
    describe: 'Si eres de los que recorre la ciudad sin descanso y tus planes no tienen límite, entonces necesitas esta bota deportiva combinada en tejido denim y efecto piel. Modelo con cuello acolchado, costuras en contraste y el logo de la marca estampado en el talón. Tiene cierre de cordones.',
  },
  {
    image: producto2,
    name: 'Deportiva negra estampada',
    price: '$51.99',
    describe: '',
  },
  {
    image: producto3,
    name: 'Deportiva combinada suela volumen',
    price: '$51.99',
    describe: '',
  },
  {
    image: producto4,
    name: 'Deportiva casual combinada aire',
    price: '$48.99',
    describe: '',
  },
  {
    image: producto5,
    name: 'Zapatilla lona negra elásticos',
    price: '$30.60',
    describe: '',
  },
  {
    image: producto6,
    name: 'Deportiva casual efecto piel combinada',
    price: '$38.99',
    describe: '',
  },
  {
    image: producto7,
    name: 'Deportiva lona logo lateral',
    price: '$27.99',
    describe: '',
  },
  {
    image: producto8,
    name: 'Deportiva clásica bandas laterales',
    price: '$33.99',
    describe: '',
  },
  
];

const ProductCard = ({ image,describe, name, price, onClick }) => (
  <div className="col-lg-3 row-md-4 col-sm-6 mb-4">
    <div className="card h-100" onClick={onClick}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <p className="card-text">{describe}</p>
      </div>
      <div className="card-footer d-flex justify-content-between me-1">
        <Link to="/favoritos">
          <FavoriteIcon className="action-icon1" />
        </Link>
        <Link to="/carrito">
          <ShoppingCartIcon className="action-icon2" />
        </Link>
      </div>
    </div>
  </div>
);

const ProductModal = ({ show, onClose, product }) => {
  if (!show) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <img src={product.image} alt={product.name} />
        <br/>
        <h5>Descripción</h5>
        <p>{product.describe}</p>
      </div>
    </div>
  );
};

const ProductCatalog = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className='catalogo'>
      <h2 className="my-4">Catálogo de zapatillas deportivas para hombre</h2>
      <div className="row">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            image={product.image} 
            name={product.name} 
            price={product.price} 
            onClick={() => handleCardClick(product)} 
          />
        ))}
      </div>
      <ProductModal 
        show={!!selectedProduct} 
        onClose={handleCloseModal} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default ProductCatalog;


