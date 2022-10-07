
import React from 'react';
import NavBar from "./components/NavBar/NavBar.js";
import ItemList from "./components/ItemListContainer/ItemListContainer.js";
import Footer from "./components/Footer/Footer.js";

import { BrowserRouter } from 'react-router-dom';

function App() {

    return (
        <BrowserRouter>
            <NavBar prodCounter="0" />
            
            <ItemList greeting="BIENVENIDO !!" />

            <Footer />
        </BrowserRouter> 
    );
}

export default App;