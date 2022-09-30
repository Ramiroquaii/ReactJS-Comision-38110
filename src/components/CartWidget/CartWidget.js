import './CartWidget.css';
import carrito from './carrito.png';
// import carritoLleno from './carritoLleno.png';

function SeccionCarrito({contador}) {

    return (
        <div className="cartWidget">

            <div className="contador">
                <p>{contador}</p>
            </div>

            <div className="carro">
                <img src={carrito} alt="Logo React JS"></img>
            </div>

        </div>
    );
}

export default SeccionCarrito;