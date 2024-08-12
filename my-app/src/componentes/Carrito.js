import React, { useState } from "react";
import '../estilos/carrito.css'; 
import Formulario from "./Formulario";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from "react-bootstrap";

function Carrito() {
    const initialProducts = [
        {
            foto: "https://ae01.alicdn.com/kf/S7d5da5a496c44a85bd59c748ecb5a80eF.jpg_640x640Q90.jpg_.webp",
            descripcion:  "Cuero negro con bordado",
            talla: 36, 
            color: "Negro", 
            cantidad: 3, 
            precioUnidad: 12.45, 
            precioTotal: 37.35
        }, 
        { 
            foto: "https://ae01.alicdn.com/kf/Seccdfd3808b6481ca949678e7f041bbff.jpg_640x640Q90.jpg_.webp",
            descripcion:  "Cuero rojo con bordado",
            talla: 40, 
            color: "Rojo",
            cantidad: 2, 
            precioUnidad: 21.0, 
            precioTotal: 42.0
        },
        {
            foto: "https://i.pinimg.com/736x/45/8a/1e/458a1e3587f8e69c5fe9428799ffe511.jpg",
            descripcion:  "Con bordados a mano",
            talla: 30, 
            color: "Blanco",
            cantidad: 1, 
            precioUnidad: 21.0, 
            precioTotal: 21.0
        }, 
        {
            foto: "https://m.media-amazon.com/images/I/61gGNweciqL._AC_UF894,1000_QL80_.jpg",
            descripcion: "Con malla gris y blancos", 
            talla: 35, 
            color: "Gris",
            cantidad: 2,
            precioUnidad: 25.50, 
            precioTotal: 51.0
        }
    ];

    const [products, setProducts] = useState(initialProducts);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    function vaciarCarrito() {
        setProducts([]);  
    }

    function Comprar(){
        setMostrarFormulario(true);
    }

    function cancelarCarrito(){
        window.location.href="/"; 
    }

    function mostrarModalActualizar() {
        setMostrarModal(true);
        setTimeout(() => {
            const modalElement = document.querySelector('.modal');
            if (modalElement) {
                modalElement.style.zIndex = '1050';
            }
        }, 0);
    }

    function cerrarModalActualizar() {
        setMostrarModal(false);
    }

    function validacionesEnvio(event) {
        let talla = document.getElementById("talla").value; 
        let cantidad = document.getElementById("cantidad").value; 
        let color = document.getElementById("color").value.trim(); 
        let error1 = document.getElementById("tallaHelp"); 
        let error2 = document.getElementById("cantidadHelp"); 
        let error3 = document.getElementById("colorHelp"); 
    
        document.getElementById("talla").style.border = ""; 
        document.getElementById("cantidad").style.border = "";
        document.getElementById("color").style.border = ""; 
    
        error1.textContent = "";
        error2.textContent = ""; 
        error3.textContent = ""; 
    
        let esInvalido = false; 
    
        if (talla === "") {
            document.getElementById("talla").style.border = "2px solid red"; 
            document.getElementById("tallaHelp").style.color = "red"; 
            error1.textContent = "El campo talla se encuentra vacío"; 
            esInvalido = true; 
        } else if (talla !== "30" && talla !== "32" && talla !== "34" && talla !== "35" && talla !== "36" && talla !== "40" && talla !== "42") {
            document.getElementById("talla").style.border = "2px solid red"; 
            document.getElementById("tallaHelp").style.color = "red"; 
            error1.textContent = "La talla no se encuentra disponible"; 
            esInvalido = true; 
        }
    
        if (cantidad === "") {
            document.getElementById("cantidadHelp").style.color = "red"; 
            document.getElementById("cantidad").style.border = "2px solid red";
            error2.textContent = "El campo cantidad se encuentra vacío"; 
            esInvalido = true; 
        } else if (parseInt(cantidad) <= 0) {
            document.getElementById("cantidadHelp").style.color = "red"; 
            document.getElementById("cantidad").style.border = "2px solid red";
            error2.textContent = "La cantidad no puede ser negativa o cero"; 
            esInvalido = true; 
        }
    
        if (color === "") {
            document.getElementById("color").style.border = "2px solid red"; 
            document.getElementById("colorHelp").style.color = "red"; 
            error3.textContent = "El campo color se encuentra vacío"; 
            esInvalido = true; 
        } else if (color.toLowerCase() !== "amarillo" && color.toLowerCase() !== "rojo" && 
                   color.toLowerCase() !== "azul" && color.toLowerCase() !== "negro" && 
                   color.toLowerCase() !== "gris" && color.toLowerCase() !== "blanco") {
            document.getElementById("color").style.border = "2px solid red"; 
            document.getElementById("colorHelp").style.color = "red"; 
            error3.textContent = "El color no está disponible o se encuentra mal escrito el nombre del color"; 
            esInvalido = true; 
        }
    
        if (esInvalido) {
            event.preventDefault(); 
        } 
    }

    function actualizarCarrito(){
        setProducts([
            {
                foto: "https://ae01.alicdn.com/kf/S7d5da5a496c44a85bd59c748ecb5a80eF.jpg_640x640Q90.jpg_.webp",
                descripcion:  "Cuero negro con bordado",
                talla: 36, 
                color: "Amarillo", 
                cantidad: 4, 
                precioUnidad: 12.45, 
                precioTotal: 49.8
            }, 
            { 
                foto: "https://ae01.alicdn.com/kf/Seccdfd3808b6481ca949678e7f041bbff.jpg_640x640Q90.jpg_.webp",
                descripcion:  "Cuero rojo con bordado",
                talla: 40, 
                color: "Rojo",
                cantidad: 5, 
                precioUnidad: 21.0, 
                precioTotal: 105
            },
            {
                foto: "https://i.pinimg.com/736x/45/8a/1e/458a1e3587f8e69c5fe9428799ffe511.jpg",
                descripcion:  "Con bordados a mano",
                talla: 30, 
                color: "Blanco",
                cantidad: 1, 
                precioUnidad: 21.0, 
                precioTotal: 21.0
            }, 
            {
                foto: "https://m.media-amazon.com/images/I/61gGNweciqL._AC_UF894,1000_QL80_.jpg",
                descripcion: "Con malla gris y blancos", 
                talla: 35, 
                color: "Negro",
                cantidad: 2,
                precioUnidad: 25.50, 
                precioTotal: 51.0
            }
        ]);
    }

    function eliminarProducto(index) {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    }

    function renderProduct(product, index) {
        return (
            <div className="product-item row align-items-center my-3" key={index}>
                <div className="col-12 col-md-2 text-center">
                <img src={product.foto} alt="Imagen del producto" className="producto-foto" />
                </div>
                <div className="col-12 col-md-8">
                    <p className="producto-descripcion"><strong>Descripcion:</strong> {product.descripcion}</p>
                    <p className="producto-cantidad"><strong>Cantidad:</strong> {product.cantidad}</p>
                    <p className="producto-precioUnitario"><strong>Precio unidad:</strong> {product.precioUnidad}</p> 
                    <p className="producto-precioTotal"><strong>Precio total:</strong> {product.precioTotal}</p> 
                </div>
                <div className="col-12 col-md-2 text-center">
                    <Button id='anadir' onClick={mostrarModalActualizar} className="me-2">Editar</Button>
                    <Button id='eliminar' onClick={() => eliminarProducto(index)}>Eliminar</Button>
                </div>
            </div>
        );
    }

    function renderModal() {
        
        return (
            <Modal show={mostrarModal} onHide={cerrarModalActualizar}>
                <Modal.Header closeButton>
                    <Modal.Title>Información que puede modificar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="talla" className="form-label">Talla: </label>
                            <input type="number" className="form-control" id="talla" aria-describedby="tallaHelp" />
                            <div id="tallaHelp" className="form-text">Tallas disponibles: 30, 32, 34, 35, 36, 40, 42. </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Cantidad del producto: </label>
                            <input type="number" className="form-control" id="cantidad" aria-describedby="cantidadHelp" />
                            <div id="cantidadHelp" className="form-text">Debe ser mayor a 0</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="color" className="form-label">Color: </label>
                            <input type="text" className="form-control" id="color" aria-describedby="colorHelp" />
                            <div id="colorHelp" className="form-text">Colores disponibles: Amarillo, Rojo, Azul, Negro, Gris, Blanco.</div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={validacionesEnvio}>Guardar Cambios</button>
                    </form>
                    </Modal.Body>
                <Modal.Footer>
                    <Button id="eliminar" onClick={cerrarModalActualizar}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        );
    }

    return (
        <div className="carrito">
        <div className="container">
            <h2>Carrito de Compras</h2>
            {products.length === 0 ? (
                <p>No hay productos en el carrito</p>
            ) : (
                products.map((product, index) => renderProduct(product, index))
            )}
            <h2>Total: {products.reduce((total, product) => total + product.precioTotal, 0).toFixed(2)}</h2>
            <div className="botonesCarrito  d-flex justify-content-center me-2">
                <button className="btn btn-sm me-2 mx-1" onClick={Comprar}>Comprar</button>
                <button className="btn btn-sm me-2 mx-1" onClick={cancelarCarrito}>Cancelar</button>
                <button className="btn btn-sm me-2 mx-1" onClick={vaciarCarrito}>Vaciar carrito</button>
                <button className="btn btn-sm mx-1" onClick={actualizarCarrito}>Actualizar carrito</button>
            </div>
            {mostrarFormulario && <Formulario />}
            {renderModal()}
        </div>
    </div>
    );
}

export default Carrito;
