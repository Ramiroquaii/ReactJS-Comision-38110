import './NavBar.css';
import logo from './logo192.png';
import Carro from '../CartWidget/CartWidget.js';

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="navLogo">
                <img src={logo} alt="Logo React JS"></img>
                <div className="navSection">
                    <a href="/" className="titulo-web">e-REACT</a>
                    <p>Tienda de componentes...</p>
                </div>
            </div>
            <ul>
                <li className="activo">
                    <a href="/precios">Productos</a>
                </li>
                <li>
                    <a href="/acercade">Nosotos</a>
                </li>
                <li>
                    <a href="/ubicacion">Ubicación</a>
                </li>
                <li>
                    <a href="/contacto">Contacto</a>
                </li>
            </ul>
            <Carro contador="0"/>
        </nav>
    );
}