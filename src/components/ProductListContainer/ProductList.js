import './ProductList.css';

import React, { useState, useEffect, useContext } from 'react';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import Loader from '../Loader/Loader.js';
import CardProd from '../ProductCard/ProductCard.js';

const ProductList = () => {

    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);

    const { agregarCantidad } = useContext(CarritoContext);
    const { quitarCantidad } = useContext(CarritoContext);
    const { verCarrito } = useContext(CarritoContext);

    useEffect(() => {
        if(categoria){
            const listaItems = collection(getFirestore(), 'items');
            const queryFilter = query(listaItems, where('categoria', '==', categoria));
            getDocs(queryFilter)
                .then(item => setProductos(item.docs.map(doc => ({id: doc.id, ...doc.data()}))));
        }else{
            getDocs(collection(getFirestore(), 'items')).then((item) => {
                const arrayItems = item.docs.map((doc) => ({id: doc.id, ...doc.data()}));
                setProductos(arrayItems);
            });
        }
        return (setProductos([]));
    }, [categoria]);

    return ( 
        <div>
            {!productos.length ? (
                <Loader />
            ) : (
                <div className='productList'>
                    <h1>{!categoria ? "NUESTROS PRODUCTOS" : `Categoría: ${categoria}`}</h1>            
                    <div className='filtro'>
                        <button onClick={() => agregarCantidad(1)}>Agregar</button>
                        <button onClick={() => verCarrito()}>VER Carrito</button>
                        <button onClick={() => quitarCantidad(1)}>Quitar</button>
                    </div>
                    <div className='filtro'>
                        <Link className="btn" to={`/productos/Humano`}>HUMANOS</Link>
                        <Link className="btn" to={`/productos/Alien`}>ALIENIJENAS</Link>
                    </div>
                    <div className='productosContainer'>
                        {productos.map((item) => (
                            <div key={item.id}>
                                <CardProd props={item} />
                            </div>
                        ))}
                    </div>
                    <div className='filtro'>
                        {categoria ? (
                            <Link className='btn' to={`/productos`}>VOLVER</Link>
                        ) : (
                            <Link className='btn' to={'/'}>HOME</Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};

export default ProductList;