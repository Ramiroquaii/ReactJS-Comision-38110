import React, { useEffect, useState } from 'react';
import './CartWidget.css';
import carrito from './carrito.png';
import carritoLleno from './carritoLleno.png';

function SeccionCarrito({contador}) {

    const [numeroProductos, setCounter] = useState(0);

    useEffect( () => {
        if(contador >= 0) {
            setCounter(contador);
        }
    }, [contador]);

    return (
        <div className="cartWidget">

            <div className="contador">
                <p>{numeroProductos}</p>
            </div>

            <div className="carro">
                <img src={numeroProductos > 0 ? carritoLleno : carrito} alt="Carrito"></img>
            </div>

        </div>
    );
}

export default SeccionCarrito;