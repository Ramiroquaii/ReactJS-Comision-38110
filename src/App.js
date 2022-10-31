import './App.css';

import React from 'react';

import { CarritoProvider } from './contexts/CarritoContext.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar.js";
import Footer from "./components/Footer/Footer.js";
import ProductList from './components/ProductListContainer/ProductList.js';
import ProductDetail from './components/ProductDetailContainer/ProductDetail.js';

import Home from './routes/Home.js';
import Carrito from './routes/Carrito.js';
import Compra from './routes/Compra.js';
import Gracias from './routes/Gracias.js';
import Nosotros from './routes/Nosotros.js';
import Ubicacion from './routes/Ubicacion.js';
import Contacto from './routes/Contacto.js';
import Error from './routes/Error.js';

function App() {

    return (
        <div>
            <BrowserRouter>
                <CarritoProvider>
                    <NavBar />
                    <div className="mainContainer">
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/productos" element={<ProductList />} />
                            <Route exact path="/productos/:categoria" element={<ProductList />} />
                            <Route exact path="/productos/:categoria/:id" element={<ProductDetail />} />
                            <Route exact path="/carrito" element={<Carrito />} />
                            <Route exact path="/compra" element={<Compra />} />
                            <Route exact path="/gracias" element={<Gracias />} />
                            <Route exact path="/nosotros" element={<Nosotros />} />
                            <Route exact path="/ubicacion" element={<Ubicacion />} />
                            <Route exact path="/contacto" element={<Contacto />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </CarritoProvider>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;