import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import './firebase.css';

const ItemList = () => {

    const [ items, setItems ] = useState([]);

    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');

        getDocs(itemsCollection).then((snapshot) => {
            const arrayItems = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            setItems(arrayItems);
        });

    }, []);

    return (
        <div>
            {items.map((producto) => (
                <div className='detallePorId'>
                    <p>Nombre: {producto.name}</p>
                    <p>ID: {producto.id}</p>
                    <img src={producto.imagen} alt={producto.name}></img>
                    <p>Especie: {producto.categoria}</p>
                    <p>Precio: {producto.precio}</p>
                    <p>Stock: {producto.cantidad}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;