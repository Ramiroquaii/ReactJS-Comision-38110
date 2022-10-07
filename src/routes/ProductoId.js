import './rutas.css';
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductoId = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((res) => res.json())
            .then((characterInfo) => setCharacter(characterInfo));
            
        }, [id]);

    return (
        <div>
            {Object.keys(character).length === 0 ? (
            <div>Cargando...</div>
            ) : (
            <div className='detallePorId'>
                <p>ID: {character.id}</p>
                <p>Nombre: {character.name}</p>
                <img src={character.image} alt="Carrito"></img>
                <p>Especie: {character.species}</p>
                <p>Apariciones: {character.episode.length}</p>
                <Link to={'/productos'}>VOLVER</Link>
            </div>
            )}
        </div>
    );
};

export default ProductoId;