
import './Titulo.css';

import React, { useContext } from 'react';
import { CarritoContext } from '../../contexts/CarritoContext.js';


function SeccionContenedor() {

    const { tituloRuta } = useContext(CarritoContext);
    
    return (
        <div className="titulo"> 
            <h1>{tituloRuta}</h1>
        </div>
    );
}

export default SeccionContenedor;