import './ProductList.css';

import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { Link, useParams } from 'react-router-dom';

import Loader from '../Loader/Loader.js';
import CardProd from '../ProductCard/ProductCard.js';

const ProductList = () => {

    const { categoria } = useParams();
    const [productos, setProductos] = useState([]);

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
                        <Link className="btn" to={`/productos/Humano`}>HUMANOS</Link>
                        <Link className="btn" to={`/productos/Alien`}>ALIENÍGENAS</Link>
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