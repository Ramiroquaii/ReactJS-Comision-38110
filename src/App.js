import React from 'react';
import NavBar from "./components/NavBar/NavBar.js";
import Carro from "./components/CartWidget/CartWidget.js";
import ItemList from "./components/ItemListContainer/ItemListContainer.js";
import Footer from "./components/Footer/Footer.js";

function App() {
    return (
        <React.Fragment>
            <NavBar>
                <Carro />
            </NavBar>
            <ItemList greeting="BIENVENIDO" />
            <Footer />
        </React.Fragment>
    );
}

export default App;