
import './rutas.css';
import React, { useState, useEffect } from 'react';

import CardProd from '../components/ProductCard/ProductCard.js';

const DetalleProductos = () => {

    const [personajes, setPersonaje] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=1`)
            .then((res) => res.json())
            .then((resPersonaje) => {
                if (resPersonaje) {
                    setPersonaje(resPersonaje.results);
                }
            });
    }, []);

    return (
        <div className='productosContainer'>

            {personajes.map((personaje) => (
                <CardProd
                    idProducto={personaje.id}
                    nombre={personaje.name}
                    imagen={personaje.image}
                    descripcion={personaje.species}
                    precio={personaje.episode.length}
                    key={personaje.id}
                />
            ))}
        </div>
    );
};

export default DetalleProductos;