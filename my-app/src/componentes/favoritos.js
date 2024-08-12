import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/favoritos.css';

function Favoritos() {
    const favoritosIniciales = [
        {
            foto: "https://www.inside-shops.ec/wp-content/uploads/2022/12/W256831010101.jpg",
            descripcion: "Bota deportiva denim combinada",
            sku: "8896078103",
            tallas: [37, 39, 40, 42, 47]
        },
        {
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLv3BxWL18zt8zZSpb1JC1mHkib_-v93STaQ&s",
            descripcion: "Deportiva negra estampada",
            sku: "8896078103",
            tallas: [37, 39, 40, 42, 47]
        },
        {
            foto: "https://www.inside-shops.ec/wp-content/uploads/2021/10/W152461010101-450x600.jpg",
            descripcion: "Deportiva casual combinada aire",
            sku: "8896078103",
            tallas: [37, 39, 40, 42, 47]
        },
        {
            foto: "https://www.inside-shops.ec/wp-content/uploads/2022/12/W251101202001.jpg",
            descripcion: "Deportiva combinada suela volumen",
            sku: "8896078103",
            tallas: [37, 39, 40, 42, 47]
        },
        {
            foto: "https://www.inside-shops.ec/wp-content/uploads/2021/10/S153781202001-900x1200.jpg",
            descripcion: "Deportiva lona logo lateral",
            sku: "8896078103",
            tallas: [37, 39, 40, 42, 47]
        }
    ];

    const [favoritos, setFavoritos] = useState(favoritosIniciales);

    function eliminarFavorito(indice) {
        const nuevosFavoritos = [...favoritos];
        nuevosFavoritos.splice(indice, 1);
        setFavoritos(nuevosFavoritos);
    }

    function añadirAlCarrito(indice) {
        console.log("Añadir al carrito:", favoritos[indice]);
        window.location.href="/carrito";
    }

    return (
        <div className="container mt-4" id="favoritos-card">
            <h1 className="text-center mb-4">Lista de favoritos</h1>
            <div className="row">
                {favoritos.map((producto, indice) => (
                    <div className="col-md-4 mb-4 " key={indice}>
                        <div className="card h-100">
                            <img src={producto.foto} alt="producto" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">{producto.descripcion}</h5>
                                <p className="card-text">SKU: {producto.sku}</p>
                                <div className="producto-tallas mb-2 justify-content-center">
                                    <p>Tallas:</p>
                                    <div className="btn-grou custom-center">
                                        {producto.tallas.map((talla, tallaIndice) => (
                                            <button key={tallaIndice} className="btn btn-outline-dark btn-sm me-2 mx-1">{talla}</button>
                                        ))}
                                    </div>
                                </div>
                                <button className="btn me-2" id="eliminar" onClick={() => eliminarFavorito(indice)}>Eliminar favorito</button>
                                <button className="btn " id="anadir" onClick={() => añadirAlCarrito(indice)}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favoritos;



