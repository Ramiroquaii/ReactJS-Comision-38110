import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({props}) { //Se recibe un objeto producto.
    
    return (
        <div className="cardProduct" key={props.id}>
            <p>{props.nombre}</p>
            <img src={props.imagen} alt={props.nombre}></img>
            <p>{props.categoria}</p>
            <Link className="" to={`/productos/categoria/${props.id}`}>VER</Link>
        </div>
    );
}

export default ProductCard;