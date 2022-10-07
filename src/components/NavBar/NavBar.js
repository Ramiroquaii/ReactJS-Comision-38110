import './NavBar.css';
import logo from './logo192.png';
import Carro from '../CartWidget/CartWidget.js';
import { Link } from 'react-router-dom';

export default function NavBar({prodCounter}) {
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
                    <Link to={'/productos'}>Productos</Link>
                </li>
                <li>
                    <Link to={'/nosotros'}>Nosotos</Link>
                </li>
                <li>
                    <Link to={'/ubicacion'}>Ubicación</Link>
                </li>
                <li>
                    <Link to={'/contacto'}>Contacto</Link>
                </li>
            </ul>
            <Carro contador={prodCounter}/>
        </nav>
    );
}