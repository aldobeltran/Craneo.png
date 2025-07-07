import { Link } from "react-router-dom";
import "../styles/footer.css";
import logo from "../img/logo.png";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-column-info">
          <div className="footer-logo">
            <Link className="nav-logo" to={"/home"}>
              <img alt="Store logo" src={logo} />
            </Link>
          </div>
          <div className="footer-contact-info">
            <div><strong>Dirección:</strong></div>
            <div>Nivel 1, Calle Ejemplo 12, Sydney NSW 2000</div>
            <div><strong>Contacto:</strong></div>
            <div>1800 123 4567</div>
            <div>email@example.com</div>
          </div>
          {/* Aquí puedes añadir los iconos de redes sociales*/}
        </div>

        <div className="footer-links">
          <ul>
            <li><strong>Navegación</strong></li>
            <li><Link to={"/home"}>Inicio</Link></li>
            <li><Link to={"/products"}>Productos</Link></li>
            <li><Link to={"/cart"}>Carrito ({props.qty + " items"})</Link></li>
            {/* Puedes añadir más enlaces aquí si tuvieras más secciones */}
          </ul>
        </div>
      </div>

      <div className="footer-credits">
        <div className="divider"></div>
        <div className="row">
          <div>© 2024 Craneo. Todos los derechos reservados.</div>
          <div className="footer-nav-links">
            <Link to={"/privacy"}>Política de Privacidad</Link>
            <Link to={"/terms"}>Términos de Servicio</Link>
            <Link to={"/cookies"}>Configuración de Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
