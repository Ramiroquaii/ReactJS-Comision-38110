import React, { useContext } from 'react';
import { CarritoContext } from '../contexts/CarritoContext.js';
import { Link } from 'react-router-dom';

import './rutas.css';
import ProductoTicket from '../components/ProductCardTicket/ProductTicket.js';

function Carrito() {

    const { prodEnCarrito } = useContext(CarritoContext);

    return (
        <div>
            <h1>PRODUCTOS SELECCIONADOS</h1> 
            {prodEnCarrito.map((producto) => (
                <div key={producto.id}>
                    <ProductoTicket prod={producto} />
                </div>
            ))}
            <button><Link to={'/compra'} >FINALIZAR COMPRA</Link></button>
        </div>
    );
};

export default Carrito;