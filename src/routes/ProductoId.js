
import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CarritoContext } from '../contexts/CarritoContext.js';

import './rutas.css';
import Loader from '../components/Loader/Loader.js';

const ProductoId = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    const { agregarProdCarrito } = useContext(CarritoContext);
    const { setTituloRuta } = useContext(CarritoContext);

    useEffect(() => {
        update();
    }, []);

    const update = () => {
        setTituloRuta("DETALLE DE SELECCIÓN");
    };    

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((characterInfo) => setCharacter(characterInfo));
        
    }, [id]);

    return (
        <div>
            {Object.keys(character).length === 0 ? (
                <div><Loader /></div>
            ) : (
                <div className='detallePorId'>
                    <p>ID: {character.id}</p>
                    <p>Nombre: {character.name}</p>
                    <img src={character.image} alt="Carrito"></img>
                    <p>Especie: {character.species}</p>
                    <p>Apariciones: {character.episode.length}</p>
                    <Link to={`/productos/${character.species}`}>VOLVER</Link>
                    <button onClick = { () => agregarProdCarrito(character, 1) }>Agregar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default ProductoId;