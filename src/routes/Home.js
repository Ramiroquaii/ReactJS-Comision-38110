
import React, { useContext, useEffect } from 'react';
import { CarritoContext } from '../contexts/CarritoContext.js';

const Home = () => {

    const { setTituloRuta } = useContext(CarritoContext);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        setTituloRuta("BIENVENIDO");
    };

    return <div>PAGINA PRINCIPAL</div>;
};

export default Home;
