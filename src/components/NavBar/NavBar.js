import './NavBar.css';
import logo from './logo192.png';
import Carro from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="navLogo">
                <img src={logo} alt="Logo React JS"></img>
                <div className="navSection">
                    <Link to={'/'}><p className="titulo-web">e-REACT</p></Link>
                    <p>Tienda de componentes...</p>
                </div>
            </div>
            <ul>
                <li className="activo">
                    <Link to={'/Productos'}>Productos</Link>
                </li>
                <li>
                    <Link to={'/Nosotros'}>Nosotos</Link>
                </li>
                <li>
                    <Link to={'/Ubicacion'}>Ubicación</Link>
                </li>
                <li>
                    <Link to={'/Contacto'}>Contacto</Link>
                </li>
            </ul>
            <Carro contador="0"/>
        </nav>
    );
}