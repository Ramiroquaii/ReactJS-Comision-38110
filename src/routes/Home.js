
import React from 'react';

import logoCoder from './coderLogo.png';

const Home = () => {
    
    return (
        <div className='home'>
            <img src={logoCoder} alt="CoderHouse"></img>
            <h2>Entrega Proyecto Final</h2>
            <p>Curso REACT JS - Expira 30/10/2022</p>
            <p>Comisión: 38110</p>
            <p>Facilitador: Felix Blanco</p>
            <p>Alumno: Ramiro Oscar Vechiola</p>
        </div>
    );
};

export default Home;
