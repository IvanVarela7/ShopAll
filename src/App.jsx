import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/home/Home'
import NotFound404 from './screens/notfound404/NotFound404'
import Cart from './screens/cart/Cart'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
