import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useContext, useRef, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import './OrderForm.css'

function OrderForm() {

	const userNameRef = useRef(null);
	const userEmailRef = useRef(null);
	const { cartItems, precioTotal } = useContext(CartContext);
	const [orderStatus, setOrderStatus] = useState({
		message: '',
		error: false
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const db = getFirestore();
		const collectionRef = collection(db, "ordenes");

		const order = {
			userName: userNameRef.current.value,
			userEmail: userEmailRef.current.value,
			items: cartItems,
			totalPrice: precioTotal
		};

		addDoc(collectionRef, order)
			.then((res) => {
				setOrderStatus({
					message: `La orden ha sido enviada con éxito. Su número de orden es: ${res.id}`,
					error: false
				});
			})
			.catch((error) => {
				setOrderStatus({
					message: `Hubo un error al enviar la orden: ${error}`,
					error: true
				});
			});
	};

	return (
		<div className="order-form-container">
			<form onSubmit={handleSubmit} className="order-form-order-form">
				<input
					ref={userNameRef}
					type="text"
					placeholder="Ingrese su nombre completo"
					required
					className="order-form-form-input"
				/>
				<input
					ref={userEmailRef}
					type="email"
					placeholder="Ingrese su email"
					required
					className="order-form-form-input"
				/>
				<button type="submit" className="order-form-submit-button">
					Enviar orden
				</button>
			</form>
			{orderStatus.message && (
				<div className={orderStatus.error ? 'order-error' : 'order-success'}>
					{orderStatus.message}
				</div>
			)}
		</div>
	)
}

export default OrderForm;
