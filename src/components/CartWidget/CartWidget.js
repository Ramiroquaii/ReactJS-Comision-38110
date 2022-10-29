
import React, { useContext } from 'react';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import './CartWidget.css';
import carritoVacio from './carrito.png';
import carritoLleno from './carritoLleno.png';
import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import Swal from 'sweetalert2'

function SeccionCarrito() {

    const { contador } = useContext(CarritoContext);

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/carrito', {replace: true}), [navigate]);

    const carroVacio = () => {
        Swal.fire({
            title: 'Carrito Vacio',
            text: 'Nada agregado aún !!',
            icon: 'warning',
        });
    };
    
    return (
        <div className="cartWidget">
            <div className="contador">
                <p>{contador}</p>
            </div>
            <div className="carro">
                <img src={contador > 0 ? carritoLleno : carritoVacio} alt="Carrito" onClick = { contador !== 0 ? handleOnClick : carroVacio }></img>
            </div>
        </div>
    );
}

export default SeccionCarrito;