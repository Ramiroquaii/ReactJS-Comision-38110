
import './NavBar.css';
import logo from './logo192.png';
import Carrito from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const setActiveTab = (e) => {
        e.target.parentElement.parentElement.childNodes.forEach(element => element.className = "");
        e.target.parentElement.className = "activo";
    }

    return (
        <nav className="nav">
            <div className="navLogo">
                <img src={logo} alt="Logo React JS"></img>
                <div className="navSection">
                    <Link to={'/'}><p className="titulo-web">e-REACT</p></Link>
                    <p>Tienda de componentes...</p>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to={'/productos'} onClick={setActiveTab}>Productos</Link>
                    </li>
                    <li>
                        <Link to={'/nosotros'} onClick={setActiveTab}>Nosotos</Link>
                    </li>
                    <li>
                        <Link to={'/ubicacion'} onClick={setActiveTab}>Ubicación</Link>
                    </li>
                    <li>
                        <Link to={'/contacto'} onClick={setActiveTab}>Contacto</Link>
                    </li>
                </ul>
            </div>
            <Carrito />
        </nav>
    );
}