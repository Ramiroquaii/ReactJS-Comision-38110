import React, { useContext, useState } from 'react';
import { CarritoContext } from '../../contexts/CarritoContext.js';

import './ProductTicket.css'
import Swal from 'sweetalert2'

function ProductoTicket({prod}) {

    const { actualizarUnidades } = useContext(CarritoContext);
    const { agregarCantidad } = useContext(CarritoContext);
    const { quitarCantidad } = useContext(CarritoContext);
    const { quitarProdCarrito } = useContext(CarritoContext);
    const { costoTotal } = useContext(CarritoContext);
    const [ cantCompra, setCantCompra ] = useState(prod.comprado);

    const changeCantidad = (ev) => {
        if(ev.target.id === "add"){
            let num = cantCompra + 1;
            if(num <= prod.cantidad){
                setCantCompra(num);
                actualizarUnidades(prod.id, num);
                agregarCantidad(1);
            }
        }else if(ev.target.id === "remove"){
            let num = cantCompra - 1;
            if(num > 0){
                setCantCompra(num);
                actualizarUnidades(prod.id, num);
                quitarCantidad(1);
            }else{
                Swal.fire({
                    title: 'Desea quitar del carrito ?',
                    showDenyButton: true,
                    confirmButtonText: 'SI',
                    denyButtonText: 'NO',
                }).then((result) => {
                    if (result.isConfirmed) {
                        quitarProdCarrito(prod.id);
                        quitarCantidad(1);
                    }
                });
            }
        }
    };

    return (
    <div>    
        <div className='lineaTicket' key={prod.id}>
            <div>
                <img src={prod.imagen} alt={prod.nombre}></img>
            </div>  
            <div>
                <p>Nombre: {prod.nombre}</p>
                <p>Categoría: {prod.categoria}</p>
                <p>Precio: {prod.precio}</p>
                <p>Disponible: {prod.cantidad}</p>
            </div>  
            <div>
                <p>Cantidad:</p>
                <button id="add" onClick = { changeCantidad }>+</button>
                <input type="text" value={cantCompra} min="0" max={prod.cantidad} readOnly={true} ></input>
                <button id="remove" onClick = { changeCantidad }>-</button>
            </div>
            <div>
                <p>Sub-Total: $ {(cantCompra * prod.precio).toFixed(2)}</p>
            </div>  
        </div>
        <div>
            <p>TOTAL: $ {costoTotal.toFixed(2)}</p>
        </div>
    </div>
    );
};

export default ProductoTicket;