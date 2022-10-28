
import React, { useContext } from 'react';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import './CartWidget.css';
import carritoVacio from './carrito.png';
import carritoLleno from './carritoLleno.png';

function SeccionCarrito() {

    const { contador } = useContext(CarritoContext);

    const desplegarCarrito = () => {
        alert("HOLA");
    };

    return (
        <div className="cartWidget">
            <div className="contador">
                <p>{contador}</p>
            </div>
            <div className="carro">
                <img src={contador > 0 ? carritoLleno : carritoVacio} alt="Carrito" onClick = { () => desplegarCarrito() }></img>
            </div>
        </div>
    );
}

export default SeccionCarrito;