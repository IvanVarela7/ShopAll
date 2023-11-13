import React from 'react'
import "../notfound404/NotFound404.css"
import { Link } from 'react-router-dom'

function NotFound404() {
	return (
		 <div className="not-found-container">
      <h1>404 Not Found</h1>
      <p>Oops! La página que estás buscando no se encuentra.</p>
      <p>Por favor, verifica la URL o regresa a la página de inicio.</p>
      <Link to="/">
        <button className="home-button">Ir a la página de inicio</button>
      </Link>
    </div>
	)
}

export default NotFound404