import React from 'react'
import './Loader.css'

function Loader() {
	return (
		<div className="loader-container">
      <div className="loader-spinner">
        <div className="loader-circle"></div>
      </div>
      <p>Cargando...</p>
    </div>
	)
}

export default Loader