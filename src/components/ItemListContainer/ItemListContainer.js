import './ItemListContainer.css';

import React from 'react';

import Home from '../../routes/Home';
import Detalle from '../../routes/Detalle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function SeccionContenedor({greeting}) {
    return (
        <React.Fragment>
            
        <div className="container">
            <h1>{greeting}</h1>
        
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/productos" element={<Detalle />} />
                <Route exact path="/nosotros" element={<Detalle />} />
                <Route exact path="/ubicacion" element={<Detalle />} />
                <Route exact path="/contacto" element={<Detalle />} />
            </Routes>
                
        </div>
        
        </React.Fragment>
    );
}

export default SeccionContenedor;