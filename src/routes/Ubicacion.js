
import React, { useContext, useEffect } from 'react';
import { CarritoContext } from '../contexts/CarritoContext.js';

const Ubicacion = () => {
    const { setTituloRuta } = useContext(CarritoContext);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        setTituloRuta("ACERCA DE NOSOTROS");
    };

    return <div>SECCION UBICACION</div>;
};

export default Ubicacion;