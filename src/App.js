
import React from 'react';

import { CarritoProvider } from './contexts/CarritoContext.js';
import { BrowserRouter } from 'react-router-dom';

import Firebase from "./components/firebase/firebase.js";
import Titulo from "./components/Titulo/Titulo.js";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import Footer from "./components/Footer/Footer.js";

function App() {

    return (
        <div>
        <Firebase />
        <BrowserRouter>
            <CarritoProvider>

                <NavBar />
                <Titulo />
                <ItemListContainer />

            </CarritoProvider>

            <Footer />
        </BrowserRouter>
        </div>
    );
}

export default App;