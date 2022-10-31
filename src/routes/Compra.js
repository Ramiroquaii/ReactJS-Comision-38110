import React, { useContext, useEffect, useState } from 'react';
import { getFirestore, doc, collection, addDoc, updateDoc, getDoc } from "firebase/firestore";
import { CarritoContext } from '../contexts/CarritoContext.js';
import { Navigate } from 'react-router-dom';

import Swal from 'sweetalert2'

import './rutas.css'

function Compra() {

    const { prodEnCarrito } = useContext(CarritoContext);
    const { costoTotal } = useContext(CarritoContext);
    const [ carritoVacio, setCarritoVacio ] = useState(false);

    const [ nom, setNombre ] = useState("");
    const [ ape, setApellido ] = useState("");
    const [ tel, setTelefono ] = useState("");
    const [ mail, setMail ] = useState("");
    const [ mail2, setMail2 ] = useState("");
    const [ numOrden, setOrden ] = useState("");

    useEffect(() => {
        if(prodEnCarrito.length === 0){
            setCarritoVacio(true);
        }else{
            setCarritoVacio(false);
        }
    }, [prodEnCarrito]);

    useEffect(() => {
        if(numOrden !== ""){
            Swal.fire({
                title: 'FELICITACIONES',
                html: `<p>Su orden fue registrada exitosamente !!<p><p>Numero de pedido: ${numOrden}<p>
                <p>Tome nota de este numero...<p>`,
                confirmButtonText: 'OK',
            });
        }
    }, [numOrden]);

    const changeHandler = (ev) => {
        switch(ev.target.id) {
            case "nombre": setNombre(ev.target.value);
            break;
            case "apellido": setApellido(ev.target.value);
            break;
            case "telefono": setTelefono(ev.target.value);
            break;
            case "correo": setMail(ev.target.value);
            break;
            case "correo2": setMail2(ev.target.value);
            break;
            default: break;
        }
    };

    const submitHandler = (ev) => {
        ev.preventDefault();
        if(nom === "" || ape === "" || tel === "" || mail === "" || mail !== mail2 ){
            Swal.fire({
                title: 'DATOS INCOMPLETOS',
                text: 'Debe completar todos los campos !!',
                confirmButtonText: 'OK',
            });
        } else {
            const orden = {
                nombre: {nom},
                apellido: {ape},
                telefono: {tel},
                correo: {mail},
                compraItems: {prodEnCarrito},
                total: {costoTotal}
            }
            submit(orden);
        }
    };

    const submit = (orden) => {
        const db = getFirestore();

        prodEnCarrito.forEach((item) => {
            let newCant;
            getDoc(doc(db, 'items', `${item.id}`))
            .then(snapshot => {
                newCant = (snapshot.data().cantidad) - item.comprado;
                const productoRef = doc(db, 'items', `${item.id}`);
                updateDoc ( productoRef, { cantidad: `${newCant}` } );
            });
        });

        addDoc(collection(db, 'ordenes'), orden).then((snapshot) => {
            setOrden(snapshot.id);
        });
    };

    return (
        <div>
            {carritoVacio ? (
                <Navigate to='/' />
            ) : (
            <div>
                {numOrden !== "" ? (<Navigate to='/gracias' />) : (
                <div>
                    <h1>CONFIRMACIÓN DE PEDIDO</h1>
                    <form onSubmit={submitHandler}>
                        <div className='formCompra'>
                            <div className='agrupacion'>
                                <div className='compraLabel'>
                                    <label>Nombre:</label>
                                    <label>Apellido:</label>
                                    <label>Telefono:</label>
                                    <label>Correo:</label>
                                    <label>Verifique:</label>
                                </div>
                                <div className='compraDatos'>
                                    <input type="text" id="nombre" value={nom} onChange={changeHandler}></input>   
                                    <input type="text" id="apellido" value={ape} onChange={changeHandler}></input>
                                    <input type="text" id="telefono" value={tel} onChange={changeHandler}></input>  
                                    <input type="email" id="correo" value={mail} onChange={changeHandler}></input>
                                    <input type="email" id="correo2" placeholder="Ingese nuevamente su correo..." value={mail2} onChange={changeHandler}></input>
                                </div>
                            </div>
                            <div className='compraDatos'>
                                <button className='btnCompra'>SOLICITAR</button>
                            </div>
                        </div>
                    </form>
                </div>
                )}
            </div>
        )}
        </div>
    );
}

export default Compra;