import React, { useState } from 'react';

const CarritoContext = React.createContext();

const CarritoProvider = ({ children }) => {

    const [tituloRuta, setTituloRuta] = useState("BIENVENIDOS");
    const [contador, setCantidad] = useState(0);
    const [prodEnCarrito, setCarrito] = useState([]);

    const agregarCantidad = (cant) => {
        setCantidad(contador + cant);
    };

    const quitarCantidad = (cant) => {
        let aux = contador - cant;
        setCantidad(aux < 0 ? 0 : aux);
    };

    const agregarProdCarrito = (prod, cant) => {
        let aux = [...prodEnCarrito, prod];
        setCarrito(aux);
        agregarCantidad(cant);
    }

    const quitarProdCarrito = () => {

    };

    return (
        <CarritoContext.Provider value={{ contador, tituloRuta,
        agregarProdCarrito, quitarProdCarrito, setTituloRuta, agregarCantidad, quitarCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext, CarritoProvider };
