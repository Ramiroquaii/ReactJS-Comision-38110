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

        console.log(character);
    return (
        <div>
            {Object.keys(character).length === 0 ? (
            <div>Cargando...</div>
            ) : (
            <div>
                <p>name: {character.name}</p>
                <p>height: {character.id}</p>
                <Link to={'/productos'}>Back</Link>
            </div>
            )}
        </div>
    );
};

export default ProductoId;