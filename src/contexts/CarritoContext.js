import React, { useState } from 'react';

const CarritoContext = React.createContext();

const CarritoProvider = ({ children }) => {

    const [contador, setCantidad] = useState(0);

    const agregarCantidad = (cant) => {
        setCantidad(contador + cant);
    };

    const quitarCantidad = (cant) => {
        let aux = contador - cant;
        setCantidad(aux < 0 ? 0 : aux);
    };

    return (
        <CarritoContext.Provider value={{ contador, agregarCantidad, quitarCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext, CarritoProvider };
