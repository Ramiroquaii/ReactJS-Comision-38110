
import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import { CarritoContext } from '../contexts/CarritoContext.js';

import './rutas.css';

function Error() {
    const { setTituloRuta } = useContext(CarritoContext);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        setTituloRuta("ERROR !!");
    };    

    return (
        <div className="error">
            <h2>Algo no andubo bien !!</h2>
            <h3>Elije donde volver:</h3>
            <Link className="" to={`/`}>HOME</Link>
            <Link className="" to={`/Productos`}>PRODUCTOS</Link>
        </div>
    );
}

export default Error;