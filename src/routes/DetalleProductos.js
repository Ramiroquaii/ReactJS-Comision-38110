
import './rutas.css';
import React, { useState, useEffect } from 'react';

import CardProd from '../components/ProductCard/ProductCard.js';
import { useParams } from 'react-router-dom';

const DetalleProductos = () => {

    const { idProd } = useParams();
    const [personajes, setPersonaje] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=1`)
            .then((res) => res.json())
            .then((resPersonaje) => {
                if(idProd !== undefined){
                    setPersonaje((resPersonaje.results).filter(p => p.id === parseInt(idProd)));
                    console.log(idProd);
                } else {
                    setPersonaje(resPersonaje.results);
                    console.log(idProd);
                }
            });
    }, [idProd]);

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