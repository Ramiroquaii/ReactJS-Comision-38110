import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({idProducto, nombre, imagen, descripcion, precio}) {

    return (
        <div className="cardProduct">
            <p>{nombre}</p>
            <img src={imagen} alt={nombre}></img>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <Link className="" to={`/Producto/${idProducto}`}>VER</Link>
        </div>
    );
}

export default ProductCard;