
import React, { useContext, useEffect } from 'react';
import { CarritoContext } from '../contexts/CarritoContext.js';

const Nosotros = () => {

    const { setTituloRuta } = useContext(CarritoContext);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        setTituloRuta("ACERCA DE NOSOTROS");
    };
    

    return <div>SECCION NOSOTROS</div>;
};

export default Nosotros;