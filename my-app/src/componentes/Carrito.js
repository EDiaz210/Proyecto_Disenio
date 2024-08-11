import React, { useState } from "react";
import '../estilos/carrito.css'; 
import Formulario from "./Formulario";
import 'bootstrap/dist/css/bootstrap.min.css';

function Carrito() {
    const initialProducts = [
        {
            foto: "https://ae01.alicdn.com/kf/S7d5da5a496c44a85bd59c748ecb5a80eF.jpg_640x640Q90.jpg_.webp",
            descripcion:  "Cuero negro con bordado",
            cantidad: 3, 
            precioUnidad: 12.45, 
            precioTotal: 37.35
        }, 
        { 
            foto: "https://ae01.alicdn.com/kf/Seccdfd3808b6481ca949678e7f041bbff.jpg_640x640Q90.jpg_.webp",
            descripcion:  "Cuero rojo con bordado",
            cantidad: 2, 
            precioUnidad: 21.0, 
            precioTotal: 42.0
        },
        {
            foto: "https://i.pinimg.com/736x/45/8a/1e/458a1e3587f8e69c5fe9428799ffe511.jpg",
            descripcion:  "Con bordados a mano",
            cantidad: 1, 
            precioUnidad: 21.0, 
            precioTotal: 21.0
        }, 
        {
 
            foto: "https://m.media-amazon.com/images/I/61gGNweciqL._AC_UF894,1000_QL80_.jpg",
            descripcion: "Con malla gris y blancos", 
            cantidad: 2,
            precioUnidad: 25.50, 
            precioTotal: 51.0
        }
    ];
    const [products, setProducts] = useState(initialProducts);

    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    function vaciarCarrito() {
        setProducts([]);  // Clears the products array
    }
    function Comprar(){
        setMostrarFormulario(true);
    }

    function cancelarCarrito(){
        window.location.href="/"; 
    }

    function actualizarCarrito(){
        setProducts([
            {
                foto: "https://lecoqsportif.com.ar/wp-content/uploads/2023/11/64a4ae67877a9-2310203_4-1024x1024.webp",
                descripcion:  "Cuero violeta con bordado",
                cantidad: 3, 
                precioUnidad: 12.45, 
                precioTotal: 37.35
            }, 
            {
                foto: "https://i.blogs.es/413753/converse-bordadas/original.jpeg",
                descripcion:  "Cuero rojo con bordado",
                cantidad: 2, 
                precioUnidad: 20.0, 
                precioTotal: 40.0
            },
            { 
                foto: "https://img.kwcdn.com/product/1e133b32afc/ba8fa9a2-234c-4d35-9309-c3024eaaec05_1200x1200.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
                descripcion:  "Con malla amarilla",
                cantidad: 1, 
                precioUnidad: 46.0, 
                precioTotal: 21.0
            }, 
            {
                foto: "https://m.media-amazon.com/images/I/716XwYPyENL._AC_UF894,1000_QL80_.jpg",
                descripcion: "Con malla cafe y blancos", 
                cantidad: 2,
                precioUnidad: 34.50, 
                precioTotal: 69.0
            }
        ])
    }

    return (
        <div className="carrito">
            <h1 className="text-center">Productos seleccionados</h1>
            {products.map((product, index) => (
                <div className="product-item row align-items-center my-3" key={index}>
                    <div className="col-12 col-md-2 text-center">
                        <button className="btn btn-danger">X</button>
                    </div>
                    <div className="col-12 col-md-2 text-center">
                        <img src={product.foto} alt="producto" className="img-fluid producto-foto"/>
                    </div>
                    <div className="col-12 col-md-8">
                        <p className="producto-descripcion"><strong>Descripcion:</strong> {product.descripcion}</p>
                        <p className="producto-cantidad"><strong>Cantidad:</strong> {product.cantidad}</p>
                        <p className="producto-precioUnitario"><strong>Precio unidad:</strong> {product.precioUnidad}</p> 
                        <p className="producto-precioTotal"><strong>Precio total:</strong> {product.precioTotal}</p> 
                    </div>
                </div>
            ))}
            <h2 className="text-end">Total: {products.reduce((total, product) => total + product.precioTotal, 0).toFixed(2)}</h2>
            <div className="botonesCarrito d-flex justify-content-center me-2">
                <button className="btn btn-sm me-2" onClick={Comprar}>Comprar</button>
                <button className="btn btn-sm me-2" onClick={cancelarCarrito}>Cancelar</button>
                <button className="btn btn-sm me-2" onClick={vaciarCarrito}>Vaciar carrito</button>
                <button className="btn btn-sm" onClick={actualizarCarrito}>Actualizar carrito</button>
            </div>
            {mostrarFormulario && <Formulario />}
        </div>
    ); 
}

export default Carrito;
 