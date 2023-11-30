import React, { useContext } from 'react';
import './CardCart.css';
import { CartContext } from '../../context/CartContext';

function CardCart(props) {
    const { cart, cartItems, fetchCartItems, emptyCart, removeItem } = useContext(CartContext);

    return (
        <div className="card-cart">
            <img src={props.imagen} alt="" className="card-img-top-cart" />
            <div className="card-body-cart">
                <h5 className="card-title-cart">Marca: {props.marca}</h5>
                <p className="card-text-cart">Descripcion: {props.descripcion}</p>
                <ul className="list-group list-group-flush-cart">
                    <li className="list-group-item-cart">Color: {props.color}</li>
                    <li className="list-group-item-cart">Talle: {props.talle}</li>
                    <li className="list-group-item-cart">Cantidad: {props.cantidad}</li>
                    <li className="list-group-item-cart">
                        Precio <span className="price">${props.precio}</span>
                    </li>
                    <li className="list-group-item-cart">Genero: {props.genero}</li>
                </ul>
                <button onClick={removeItem} className="btn btn-danger btn-delete">🗑 Eliminar</button>
            </div>
        </div>
    );
}

export default CardCart;
