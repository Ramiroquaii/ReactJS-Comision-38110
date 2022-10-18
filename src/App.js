
import React from 'react';

import { CarritoProvider } from './contexts/CarritoContext.js';

import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <div>
            <BrowserRouter>
            
                <CarritoProvider>

                    <NavBar />
            
                    <ItemListContainer greeting="BIENVENIDO !!" />

                </CarritoProvider>

            </BrowserRouter>

            <Footer />
        </div>
    );
}

export default App;