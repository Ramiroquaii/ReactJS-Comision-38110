import React, { useState } from 'react';
import { useEffect } from 'react';

const CarritoContext = React.createContext();

const CarritoProvider = ({ children }) => {

    const [contador, setCantidad] = useState(0);
    const [costoTotal, setTotal] = useState(0);
    const [prodEnCarrito, setCarrito] = useState([]);

    useEffect(() => {
        let acumulador = 0;
        prodEnCarrito.forEach((item) => {
            acumulador = acumulador + (item.comprado * item.precio);
        });
        setTotal(acumulador);
    }, [prodEnCarrito]);

    const agregarCantidad = (cant) => { setCantidad(contador + cant); };
    const quitarCantidad = (cant) => { 
        let aux = contador - cant;
        setCantidad(aux < 0 ? 0 : aux);
    };

    const agregarProdCarrito = (prod, cant) => {
        let aux = [...prodEnCarrito, {comprado: cant, ...prod}];
        setCarrito(aux);
        agregarCantidad(cant);
    };

    const quitarProdCarrito = (idProd) => {
        let newArray = [...prodEnCarrito];
        let index = prodEnCarrito.map(object => object.id).indexOf(idProd);
        newArray.splice(index, 1);
        setCarrito(newArray);
    };

    const actualizarUnidades = (idProd, cant) => {
        let newArray = [...prodEnCarrito];
        let index = prodEnCarrito.map(object => object.id).indexOf(idProd);
        newArray[index].comprado = cant;
        setCarrito(newArray);
    };

    const verCarrito = () => {
        console.log(prodEnCarrito);
    };

    return (
        <CarritoContext.Provider value={{ contador, prodEnCarrito, costoTotal,
        agregarProdCarrito, quitarProdCarrito, actualizarUnidades, agregarCantidad, quitarCantidad, verCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext, CarritoProvider };
