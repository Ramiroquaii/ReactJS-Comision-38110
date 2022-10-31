import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../contexts/CarritoContext.js';
import { Link, Navigate } from 'react-router-dom';

import Swal from 'sweetalert2'

import './rutas.css';
import ProductoTicket from '../components/ProductCardTicket/ProductTicket.js';

function Carrito() {

    const { prodEnCarrito } = useContext(CarritoContext);
    const { costoTotal } = useContext(CarritoContext);

    const [ carritoVacio, setCarritoVacio ] = useState(false);

    useEffect(() => {
        if(prodEnCarrito.length === 0){
            setCarritoVacio(true);
            Swal.fire({
                title: 'CARRITO VACIO !!',
                text: 'Elimino todos los productos.',
                confirmButtonText: 'OK',
            });
        }else{
            setCarritoVacio(false);
        }
    }, [prodEnCarrito]);

    return (
        <div>
            {carritoVacio ? (
                <Navigate to='/productos' />
            ) : (
            <div className='carritoList'>
                <h1>PRODUCTOS SELECCIONADOS</h1> 
                {prodEnCarrito.map((producto) => (
                    <div key={producto.id}>
                        <ProductoTicket prod={producto} />
                    </div>
                ))}
                <div className='lineaTotal'>
                    <p>TOTAL: $ {costoTotal.toFixed(2)}</p>
                </div>
                <button className='btnFinCompra'><Link to={'/compra'} >FINALIZAR COMPRA</Link></button>
            </div>
            )}
        </div>
    );
};

export default Carrito;