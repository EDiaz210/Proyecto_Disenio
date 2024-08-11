import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/envio.css'

function Formulario() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    cedula: '',
    ciudad: '',
    provincia: '',
    celular: '',
    direccionExacta: '',
    direccionReferencial: '',
    envio: 'Servientrega',
    aceptoTerminos: false
  });

  const [errors, setErrors] = useState({}); 
  const [formStage, setFormStage] = useState(1); 

  // Listas para las ciudades y provincias
  const provincias = {
    'Pichincha': ['Quito', 'Cumbayá', 'Rumiñahui', 'Conocoto'],
    'Guayas': ['Guayaquil', 'Duran', 'Samborondón', 'Balao'],
    'Azuay': ['Cuenca', 'Gualaceo', 'Chordeleg', 'Azogues'],
    'Tungurahua': ['Ambato', 'Baños', 'Patate', 'Pelileo'],
    'Manabí': ['Manta', 'Portoviejo', 'Rocafuerte', 'Jipijapa'],
    'Loja': ['Loja', 'Zamora', 'Catamayo', 'Vilcabamba'],
    'El Oro': ['Machala', 'Zaruma', 'Pasaje', 'Santa Rosa']
  };

  const provinciasOptions = Object.keys(provincias);

  const handleChange = (e) => { // Cambios en el formulario
    const { name, value, type, checked } = e.target; // Almacenamiento de todos los valores
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleProvinceChange = (e) => {
    const selectedProvince = e.target.value;
    setFormData({
      ...formData, // Crea una copia para evitar la sobreescritura
      provincia: selectedProvince,
      ciudad: '' // Resetea la ciudad cuando se cambia la provincia
    });
  };

  const validateStage1 = () => {
    const newErrors = {};
    // Validaciones generales
    if (!formData.nombreApellido.trim()) newErrors.nombreApellido = 'Nombre y Apellido es requerido';
    if (!formData.cedula.trim()) newErrors.cedula = 'Cédula es requerida';
    if (!/^\d{10}$/.test(formData.cedula)) newErrors.cedula = 'La cédula debe tener 10 dígitos numéricos';
    if (!formData.ciudad) newErrors.ciudad = 'Ciudad es requerida';
    if (!formData.provincia) newErrors.provincia = 'Provincia es requerida';
    if (!formData.celular.trim()) newErrors.celular = 'Celular es requerido';
    if (!/^\d{10}$/.test(formData.celular)) newErrors.celular = 'El celular debe tener 10 dígitos numéricos';
    if (!formData.direccionExacta.trim()) newErrors.direccionExacta = 'Dirección exacta es requerida';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const validateStage2 = () => {
    const newErrors = {};
    if (!formData.aceptoTerminos) newErrors.aceptoTerminos = 'Debe aceptar los términos y condiciones';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (formStage === 1 && validateStage1()) { 
      setFormStage(2);
    } else if (formStage === 2 && validateStage2()) {   
      alert('Envío exitoso');
      console.log('Formulario enviado', formData);
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  };

  const handleCancel = () => {
    setFormStage(1);
  };

  const ciudadesOptions = provincias[formData.provincia] || []; 

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          {formStage === 1 && (
            <>
              <h4 className="card-title">Información de envío</h4>
              <h6 className="card-subtitle">Ingrese la dirección a dónde quiere que se entregue su pedido</h6>
            </>
          )}
          <form onSubmit={handleSubmit}> 
            {formStage === 1 && (
              <> 
                <div className="mb-3 row">
                  <div className="col-md-6">
                    <label htmlFor="nombreApellido" className="form-label">Nombres y Apellidos*</label>
                    <input
                      type="text"
                      className={`form-control ${errors.nombreApellido ? 'is-invalid' : ''}`}
                      id="nombreApellido"
                      name="nombreApellido"
                      value={formData.nombreApellido}
                      onChange={handleChange} // Actualiza el valor del campo
                    />
                    {errors.nombreApellido && <div className="invalid-feedback">{errors.nombreApellido}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="cedula" className="form-label">Cédula*</label>
                    <input
                      type="number"
                      className={`form-control ${errors.cedula ? 'is-invalid' : ''}`}
                      id="cedula"
                      name="cedula"
                      value={formData.cedula}
                      onChange={handleChange}
                    />
                    {errors.cedula && <div className="invalid-feedback">{errors.cedula}</div>}
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-md-6">
                    <label htmlFor="provincia" className="form-label">Provincia*</label>
                    <select
                      className={`form-control ${errors.provincia ? 'is-invalid' : ''}`}
                      id="provincia"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleProvinceChange}
                    >
                      <option value="">Selecciona una provincia</option>
                      {provinciasOptions.map((provincia, index) => (
                        <option key={index} value={provincia}>{provincia}</option>
                      ))}
                    </select>
                    {errors.provincia && <div className="invalid-feedback">{errors.provincia}</div>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="ciudad" className="form-label">Ciudad*</label>
                    <select
                      className={`form-control ${errors.ciudad ? 'is-invalid' : ''}`}
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una ciudad</option>
                      {ciudadesOptions.map((ciudad, index) => (
                        <option key={index} value={ciudad}>{ciudad}</option>
                      ))}
                    </select>
                    {errors.ciudad && <div className="invalid-feedback">{errors.ciudad}</div>}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="celular" className="form-label">Celular*</label>
                  <input
                    type="number"
                    className={`form-control ${errors.celular ? 'is-invalid' : ''}`}
                    id="celular"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                  />
                  {errors.celular && <div className="invalid-feedback">{errors.celular}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="direccionExacta" className="form-label">Dirección Exacta*</label>
                  <input
                    type="text"
                    className={`form-control ${errors.direccionExacta ? 'is-invalid' : ''}`}
                    id="direccionExacta"
                    name="direccionExacta"
                    value={formData.direccionExacta}
                    onChange={handleChange}
                  />
                  {errors.direccionExacta && <div className="invalid-feedback">{errors.direccionExacta}</div>}
                </div>

                <div className="mb-3">
                  <label htmlFor="direccionReferencial" className="form-label">Dirección Referencial</label>
                  <input
                    type="text"
                    className={`form-control ${errors.direccionReferencial ? 'is-invalid' : ''}`}
                    id="direccionReferencial"
                    name="direccionReferencial"
                    value={formData.direccionReferencial}
                    onChange={handleChange}
                  />
                  {errors.direccionReferencial && <div className="invalid-feedback">{errors.direccionReferencial}</div>}

                  <div className="mb-3">
                  <p><strong>Opciones de Envío</strong></p>
                  <div className="row">
                    <div className="col-md-6">
                      <p>Envio por Servientrega</p>
                    </div>
                    <div className="col-md-6 text-end">
                      <p>$5.00</p>
                    </div>
                  </div>
                </div>

                </div>
                

                <button type="submit" className="btn btn-primary">Continuar</button>
              </>
            )}

            {formStage === 2 && (
              <>
                <div id="opcionesPago">
                <h4 className="card-title">Opciones de Pago</h4>
                  <h6>Transferencia bancaria directa</h6>
                  <p>
                    Realiza tu pago directamente en nuestra cuenta bancaria.
                    Por favor, usa el número del pedido como referencia de pago.
                    Tu pedido no se procesará hasta que se haya recibido el importe en nuestra cuenta.
                    Envíanos el comprobante al whatsapp 098909444.
                  </p>
                  <div className="mb-3">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="aceptoTerminos"
                        checked={formData.aceptoTerminos}
                        onChange={handleChange}
                      />
                      Acepto los términos y condiciones
                    </label>
                    {errors.aceptoTerminos && <div className="invalid-feedback d-block">{errors.aceptoTerminos}</div>}
                  </div>
                  <button type="submit" className="btn btn-success">Finalizar</button>
                  <button type="button" className="btn btn-danger ms-2" onClick={handleCancel}>Cancelar</button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
