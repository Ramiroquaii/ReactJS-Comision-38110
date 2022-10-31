import React, { useContext, useState } from 'react';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import './ProductTicket.css'
import Swal from 'sweetalert2'

function ProductoTicket({prod}) {

    const { actualizarUnidades } = useContext(CarritoContext);
    const { quitarProdCarrito } = useContext(CarritoContext);
    const [ cantCompra, setCantCompra ] = useState(prod.comprado);

    const changeCantidad = (ev) => {
        if(ev.target.id === "add"){
            let num = cantCompra + 1;
            if(num <= prod.cantidad){
                setCantCompra(num);
                actualizarUnidades(prod.id, num);
            }
        }else if(ev.target.id === "remove"){
            let num = cantCompra - 1;
            if(num > 0){
                setCantCompra(num);
                actualizarUnidades(prod.id, num);
            }else{
                Swal.fire({
                    title: 'Desea quitar del carrito ?',
                    showDenyButton: true,
                    confirmButtonText: 'SI',
                    denyButtonText: 'NO',
                }).then((result) => {
                    if (result.isConfirmed) {
                        quitarProdCarrito(prod.id);
                    }
                });
            }
        }
    };

    return (
    <div className='marcoTicket'>    
        <div className='lineaTicket' key={prod.id}>
            <div className='lineaImg'>
                <img src={prod.imagen} alt={prod.nombre}></img>
            </div>  
            <div className='lineaDatos'>
                <div className='datosLabel'>
                    <p>Nombre:</p>
                    <p>Categoría:</p>
                    <p>Precio:</p>
                    <p>Disponible:</p>
                </div>
                <div className='datosValor'>
                    <p>{prod.nombre}</p>
                    <p>{prod.categoria}</p>
                    <p>$ {(prod.precio).toFixed(2)}</p>
                    <p>- {prod.cantidad} -</p>
                </div>
            </div>  
            <div className='lineaCantidad'>
                <p>Cantidad:</p>
                <div>
                    <button className='btnAddRem' id="add" onClick = { (ev) => changeCantidad(ev) }>+</button>
                    <input type="text" value={cantCompra} min="0" max={prod.cantidad} readOnly={true} ></input>
                    <button className='btnAddRem' id="remove" onClick = { (ev) => changeCantidad(ev) }>-</button>
                </div>
            </div>
            <div className='lineaSubTotal'>
                <p>Sub-Total:</p> 
                <p>$ {(cantCompra * prod.precio).toFixed(2)}</p>
            </div>  
        </div>
    </div>
    );
};

export default ProductoTicket;