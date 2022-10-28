
import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useParams, Link, Navigate, } from 'react-router-dom';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import Swal from 'sweetalert2'

import './ProductDetail.css';
import Loader from '../Loader/Loader.js';

const ProductDetail = () => {

    const { id } = useParams();
    const [producto, setProducto] = useState([]);
    const { agregarProdCarrito } = useContext(CarritoContext);
    const [ cantCompra, setCantCompra] = useState(0);

    useEffect(() => {
        getDoc(doc(getFirestore(), 'items', `${id}`))
            .then((doc) => {
                const item = {id: doc.id, ...doc.data()};
                setProducto(item);
            });
    }, [id]);

    const changeHandler = (ev) => {
        setCantCompra(parseInt(ev.target.value)); 
    };

    const addCarrito = () => {
        if(cantCompra == 0){
            Swal.fire({
                title: 'Cantidad',
                text: 'No puede ser 0 !!',
                icon: 'error',
            });
        }else{
            agregarProdCarrito(producto, cantCompra);
            Swal.fire({
                title: 'Producto',
                text: 'Agregado al Carrito',
                icon: 'info',
            });
            return <Navigate to='/productos' />;
        }
    };

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
                    <p>Disponibilidad: {producto.cantidad}</p>
                    <p>Precio: {producto.precio}</p>
                    <input type="number" value={cantCompra} min="0" max={producto.cantidad} onChange={changeHandler}></input>
                    <button onClick = { () => addCarrito() }>Agregar Carrito</button>
                    <button><Link to={`/productos/${producto.categoria}`}>VOLVER</Link></button>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;