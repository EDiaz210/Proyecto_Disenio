import React from 'react';
import '../estilos/ProductCard.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const ProductCard = ({ producto }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="product-card card h-100">
        <img
          src={producto.imgSrc}
          alt={producto.nombre}
          className="product-image card-img-top img-fluid"
        />
        <div className="product-info card-body d-flex flex-column justify-content-between">
          <h3 className="product-name card-title">{producto.nombre}</h3>
          <p className="product-price card-text">
            {producto.precio}{' '}
            <span className="old-price text-danger">{producto.precioAntiguo}</span>
          </p>
          <div className="product-actions mt-auto d-flex justify-content-between me-2">
            <Link to="/favoritos">  
              <FavoriteIcon className="action-icon1" />
            </Link>
            <Link to="/carrito">  
              <ShoppingCartIcon className="action-icon2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



