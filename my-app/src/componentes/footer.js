import React from 'react';
import '../estilos/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer text-light p-4">
      <div className=" flex-nav">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="social-media">
            <h5>Redes sociales:</h5>
              <div className="flex-column">
                <span>
                  <FontAwesomeIcon icon={faFacebook} className="me-1" />
                  Facebook
                </span>
                <span>
                  <FontAwesomeIcon icon={faInstagram} className="me-1" />
                  Instagram
                </span>
                <span>
                  <FontAwesomeIcon icon={faTiktok} className="me-1" />
                  TikTok
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="contacts">
              <h5>Contactos:</h5>
              <p>0984952445</p>
              <p>De lunes a viernes de 9:00 a 18:00</p>
              <p>Escríbenos</p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="links">
              <h5>Términos y condiciones</h5>
              <p>¿Quiénes somos?</p>
              <p>Guía de conservación del producto</p>
              <p>Guía de las tallas</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
