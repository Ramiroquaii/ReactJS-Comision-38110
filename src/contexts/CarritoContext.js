import React, { useState } from 'react';

import Swal from 'sweetalert2'

const CarritoContext = React.createContext();

const CarritoProvider = ({ children }) => {

    const [contador, setCantidad] = useState(0);
    const [prodEnCarrito, setCarrito] = useState([]);

    const agregarCantidad = (cant) => { setCantidad(contador + cant); };
    const quitarCantidad = (cant) => { 
        let aux = contador - cant;
        setCantidad(aux < 0 ? 0 : aux);
    };

    const agregarProdCarrito = (prod, cant) => {
        let aux = [...prodEnCarrito, {Comprado: cant, ...prod}];
        setCarrito(aux);
        agregarCantidad(cant);
    }

    const quitarProdCarrito = () => {
        
    };

    const verCarrito = () => {
        console.log(prodEnCarrito);
    };

    return (
        <CarritoContext.Provider value={{ contador,
        agregarProdCarrito, quitarProdCarrito, agregarCantidad, quitarCantidad, verCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext, CarritoProvider };
