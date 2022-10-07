
import './rutas.css';
import React, { useState, useEffect } from 'react';

import CardProd from '../components/ProductCard/ProductCard.js';
import { Link, useParams } from 'react-router-dom';

const DetalleProductos = () => {

    const { tipo } = useParams();
    const [personajes, setPersonaje] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=1`)
            .then((res) => res.json())
            .then((resPersonaje) => {

                if(tipo){
                    setPersonaje((resPersonaje.results).filter(p => p.species === tipo));
                }else{
                    setPersonaje(resPersonaje.results);
                }

            });

    }, [tipo]);

    return (
        <div>
            <div className='filtro'>
                <Link className="btn" to={`/productos/Human`}>HUMANOS</Link>
                <Link className="btn" to={`/productos/Alien`}>ALIENIJENAS</Link>
            </div>
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
            <div className='filtro'>
            <Link className='btn' to={'/productos'}>VOLVER</Link>
            </div>
        </div>
    );
};

export default DetalleProductos;