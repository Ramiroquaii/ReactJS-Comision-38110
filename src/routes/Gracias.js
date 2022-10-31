
import React, { useContext } from 'react';

import './rutas.css';
import { CarritoContext } from '../contexts/CarritoContext.js';
import { Link } from 'react-router-dom';

function Gracias() {
    const { resetearApp } = useContext(CarritoContext);

    return (
        <div className='gracias'>
            <h1>GRACIAS POR SU COMPRA</h1>
            <Link className='btnGracias' to={'/'} onClick={ () => resetearApp() } >HOME</Link>
        </div>
    );
}

export default Gracias;