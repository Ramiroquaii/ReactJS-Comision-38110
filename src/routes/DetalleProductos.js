
import './rutas.css';
import React, { useState, useEffect, useContext } from 'react';

import { CarritoContext } from '../contexts/CarritoContext.js';

import Loader from '../components/Loader/Loader.js';

import CardProd from '../components/ProductCard/ProductCard.js';
import { Link, useParams } from 'react-router-dom';

const DetalleProductos = () => {

    const { tipo } = useParams();
    const [personajes, setPersonaje] = useState([]);

    const { agregarCantidad } = useContext(CarritoContext);
    const { quitarCantidad } = useContext(CarritoContext);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=1`)
            .then((res) => res.json())
            .then((resPersonaje) => {
                
                if(tipo){
                    setPersonaje((resPersonaje.results).filter(p => p.species === tipo));
                }else{

                    setTimeout(function(){
                        setPersonaje(resPersonaje.results);
                    }, 5000);
                }

            });

    }, [tipo]);

    return (
        <div>
            {!personajes.length ? (<Loader />
            ) : (
            <div>            
                <div className='filtro'>
                    <button onClick={() => agregarCantidad(1)}>Agregar</button>
                    <button onClick={() => quitarCantidad(1)}>Quitar</button>
                </div>
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
            )}
        </div>
    );
};

export default DetalleProductos;