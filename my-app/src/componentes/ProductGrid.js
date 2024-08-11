import React from 'react';
import ProductCard from './ProductCard';
import '../estilos/ProductGrid.css';

const productos = [
  { id: 1, nombre: 'Nike Jordan Retro 4', precio: '$31.99', precioAntiguo: '$51.99', imgSrc: 'https://http2.mlstatic.com/100-original-bota-zapato-nike-jordan-retro-4-talla-11-D_NQ_NP_948042-MCO31541105677_072019-F.jpg' },
  { id: 2, nombre: 'Air Jordan 4 PSG', precio: '$25.99', precioAntiguo: '$51.99', imgSrc: 'https://th.bing.com/th/id/OIP._a-3l8JGD8-QkmGmP0FDPwHaHa?rs=1&pid=ImgDetMain' },
  { id: 3, nombre: 'Adidas Superstar Concha', precio: '$25.99', precioAntiguo: '$51.99', imgSrc: 'https://th.bing.com/th/id/R.6de9084a084da0af7a1830c004117a04?rik=AgiXgT%2b7wT0iGg&pid=ImgRaw&r=0' },
  { id: 4, nombre: 'Daus Elegante Negra', precio: '$55.99', precioAntiguo: '$71.99', imgSrc: 'https://oechsle.vteximg.com.br/arquivos/ids/297332-1500-1500/908915_1.jpg?v=636694309028170000' },
  { id: 5, nombre: 'Derby Flexi Piel', precio: '$25.99', precioAntiguo: '$51.99', imgSrc: 'https://th.bing.com/th/id/OIP.1JYVj0hBhTL_j01IB2mX1AHaHa?rs=1&pid=ImgDetMain' },
  { id: 6, nombre: 'Adidas Swift Run', precio: '$25.99', precioAntiguo: '$51.99', imgSrc: 'https://th.bing.com/th/id/OIP.NIPAPTHUgnpDjQczhC6gxwAAAA?rs=1&pid=ImgDetMain' },
  { id: 7, nombre: 'Skechers Casuales', precio: '$25.99', precioAntiguo: '$51.99', imgSrc: 'https://th.bing.com/th/id/OIP.merxcKvI1z-Mef-VT7CqmwHaHa?pid=ImgDet&w=474&h=474&rs=1' },
  { id: 8, nombre: 'Puma Mayze Selflove', precio: '$25.99', precioAntiguo: '$51.99', imgSrc: 'https://th.bing.com/th/id/OIP.-A13WyywLh-XeYxdHwf3VAHaHa?rs=1&pid=ImgDetMain' }
];

const ProductGrid = () => {
  return (
    <div className='promocion'>
    <div className="product-grid">
      {productos.map(producto => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
    </div>
  );
}

export default ProductGrid;

