import React, { useState } from 'react';
import { useEffect } from 'react';

const CarritoContext = React.createContext();

const CarritoProvider = ({ children }) => {

    const [contador, setCantidad] = useState(0);
    const [costoTotal, setTotal] = useState(0);
    const [prodEnCarrito, setCarrito] = useState([]);

    useEffect(() => {
        let acumulador = 0;
        let itemsEnCarro = 0;
        prodEnCarrito.forEach((item) => {
            acumulador += (item.comprado * item.precio);
            itemsEnCarro += (item.comprado);
        });
        setTotal(acumulador);
        setCantidad(itemsEnCarro);
    }, [prodEnCarrito]);

    const agregarProdCarrito = (prod, cant) => {
        let index = prodEnCarrito.map(object => object.id).indexOf(prod.id);
        if(index === -1){
            let newArray = [...prodEnCarrito, {comprado: cant, ...prod}];
            setCarrito(newArray);
        }else{
            actualizarUnidades(prod.id, cant);
        }
    };

    const quitarProdCarrito = (idProd) => {
        let newArray = [...prodEnCarrito];
        let index = prodEnCarrito.map(object => object.id).indexOf(idProd);
        newArray.splice(index, 1);
        setCarrito(newArray);
    };

    const actualizarUnidades = (idProd, cant) => {
        let newArray = [...prodEnCarrito];
        let index = newArray.map(object => object.id).indexOf(idProd); 
        newArray[index].comprado = cant;
        setCarrito(newArray);
    };

    const resetearApp = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ contador, prodEnCarrito, costoTotal,
        agregarProdCarrito, quitarProdCarrito, actualizarUnidades, resetearApp }}>
            {children}
        </CarritoContext.Provider>
    );
};

export { CarritoContext, CarritoProvider };
