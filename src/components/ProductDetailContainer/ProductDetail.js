
import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams, Link } from 'react-router-dom';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import './ProductDetail.css';
import Loader from '../Loader/Loader.js';

const ProductDetail = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const { agregarProdCarrito } = useContext(CarritoContext);

    useEffect(() => {
        getDoc(doc(getFirestore(), 'items', `${id}`))
            .then((doc) => {
                const item = {id: doc.id, ...doc.data()};
                setProducto(item);
            });
    }, [id]);

    return (
        <div>
            {Object.keys(producto).length === 0 ? (
                <div><Loader /></div>
            ) : (
                <div className='detallePorId'>
                    <p>ID: {producto.id}</p>
                    <p>Nombre: {producto.nombre}</p>
                    <img src={producto.imagen} alt={producto.nombre}></img>
                    <p>Especie: {producto.categoria}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Precio: {producto.precio}</p>
                    <Link to={`/productos/${producto.categoria}`}>VOLVER</Link>
                    <button onClick = { () => agregarProdCarrito(producto, 1) }>Agregar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;