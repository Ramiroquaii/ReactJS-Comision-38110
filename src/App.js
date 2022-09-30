import React from 'react';
import NavBar from "./components/NavBar/NavBar.js";
import Carro from "./components/CartWidget/CartWidget.js";
import ItemList from "./components/ItemListContainer/ItemListContainer.js";
import Footer from "./components/Footer/Footer.js";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>

            <NavBar>
                <Carro />
            </NavBar>
            
            <ItemList greeting="BIENVENIDO !!" />

            <Footer />
        </BrowserRouter>
    );
}

export default App;