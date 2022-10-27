
import { Link } from 'react-router-dom';
import React from 'react';

import './rutas.css';

function Error() {

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