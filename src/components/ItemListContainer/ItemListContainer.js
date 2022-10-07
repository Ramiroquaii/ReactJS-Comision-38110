import './ItemListContainer.css';

import React from 'react';

import Home from '../../routes/Home';
import DetalleProductos from '../../routes/DetalleProductos.js';

import ProductoId from '../../routes/ProductoId.js';
import Nosotros from '../../routes/Nosotros.js';
import Ubicacion from '../../routes/Ubicacion.js';
import Contacto from '../../routes/Contacto.js';
import Error from '../../routes/Error.js';

import { Routes, Route } from 'react-router-dom';

function SeccionContenedor({greeting}) {
    return (

        <div className="container">
            
            <h1>{greeting}</h1>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/productos" element={<DetalleProductos />} />
                <Route exact path="/productos/:tipo" element={<DetalleProductos />} />
                <Route exact path="/productos/:tipo/:id" element={<ProductoId />} />
                <Route exact path="/nosotros" element={<Nosotros />} />
                <Route exact path="/ubicacion" element={<Ubicacion />} />
                <Route exact path="/contacto" element={<Contacto />} />
                <Route path="*" element={<Error />} />

            </Routes>

        </div>
    );
}

export default SeccionContenedor;