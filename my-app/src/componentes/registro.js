import React from 'react'; 
import '../estilos/registro.css';
function validacionRegistro(event){

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let contra = document.getElementById("contra").value;
    let error1 = document.getElementById("respuesta01");
    let error2 = document.getElementById("respuesta02");
    let error3 = document.getElementById("respuesta03");
    /*Limpieza de caja de textos*/ 
    document.getElementById("nombre").style.border =""; 
    document.getElementById("correo").style.border ="";
    document.getElementById("contra").style.border =""; 
    /*Limpieza de errores*/
    error1.textContent=" ";
    error2.textContent=" "; 
    error3.textContent=" "; 
    /*Conteo de errores*/
    let esInvalido = false; 
    if (nombre === "") {
        document.getElementById("nombre").style.border = "2px solid red";
        document.getElementById("respuesta01").style.color = "red";
        error1.textContent = "El campo nombre se encuentra vacío";
        esInvalido = true; 
    } else if (nombre.length > 10) {
        document.getElementById("nombre").style.border = "2px solid red";
        document.getElementById("respuesta01").style.color = "red"; 
        error1.textContent = "El nombre supera el límite de caracteres";
        esInvalido = true; 
    } else if (nombre.length < 5) {
        document.getElementById("nombre").style.border = "2px solid red";
        error1.textContent = "El nombre está por debajo del límite de caracteres";
        document.getElementById("respuesta01").style.color = "red"; 
        esInvalido = true; 
    }

    if (correo === "") {
        document.getElementById("correo").style.border = "2px solid red";
        document.getElementById("respuesta02").style.color = "red"; 
        error2.textContent = "El campo correo se encuentra vacío";
        esInvalido = true; 
    }

    if (contra === "") {
        document.getElementById("contra").style.border = "2px solid red";
        document.getElementById("respuesta03").style.color = "red"; 
        error3.textContent = "El campo contraseña se encuentra vacío";
        esInvalido = true; 
    } else if (contra.length < 16) {
        document.getElementById("contra").style.border = "2px solid red";
        document.getElementById("respuesta03").style.color = "red"; 
        error3.textContent = "El campo contraseña debe tener 16 caracteres";
        esInvalido = true; 
    } else if (!/[* / @]/.test(contra)){
        document.getElementById("contra").style.border = "2px solid red";
        document.getElementById("respuesta03").style.color = "red"; 
        error3.textContent = "El campo contraseña necesita al menos un caracter especial aceptado";
        esInvalido = true; 
    } else if (!/[1 2 3 4 5 6 7 8 9 0]/.test(contra)){
        document.getElementById("contra").style.border = "2px solid red";
        document.getElementById("respuesta03").style.color = "red"; 
        error3.textContent = "El campo contraseña necesita 1 o varios numeros";
        esInvalido = true; 
    }

    if (esInvalido) {
        event.preventDefault(); 
    } else{
        window.location.assign('/login'); 
    }
}
function registro(){
    return(
        <div id='login'>
        <div className='container d-flex justify-content-center align-items-center' >
            <div className='card p-4 shadow-lg'>
                <form className="formularioRegistro" onSubmit={validacionRegistro}>
                    <h1>Registrarse</h1>
                    <label for="nombre">Nombre usuario: </label>  
                    <br />
                    <input type="text" name="name" id="nombre" placeholder='El nombre de usuario debe tener un minimo de 5 y un maximo de 10 caracteres.'/>
                    <br />
                    <div id='respuesta01'></div>

                    <label for="correo">Dirección de correo electronico:  </label>
                    <br />
                    <input type="email" name="name" id="correo" placeholder='Coloque su correo electronico, Ej: nombre@dominio.com'/>
                    <br />
                    <div id='respuesta02'></div>

                    <label for="contra">Contraseña:  </label>
                    <br />
                    <input type="password" name="name" id="contra" placeholder='La contraseña debe tener un minimo de 16 caracteres, Ej: HolAComoEstas12*'/>
                    <br />
                    <div id='respuesta03'></div>
                    <h6>Caracteres especiales aceptados en el campo contraseña: *, / y @, obligatoriedad en el campo contraseña: colocación de numeros</h6>
                
                    <nav className="d-flex justify-content-center ">
                        <button type='submit' className="btn btn-sm mx-1 me-5" id='anadir' >Registrarse</button>
                        <a href='./login'>Atrás</a>
                    </nav>
                </form>
            </div>
        </div>
        </div>
    );
}
export default registro; 

