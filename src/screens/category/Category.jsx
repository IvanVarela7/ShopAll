import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

function Category() {
	const {idCategoria} = useParams()


	return (
		<div>
			<Navbar />
			usted esta buscando : {idCategoria}

		</div>
	)
}

export default Category