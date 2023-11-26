import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/home/Home'
import NotFound404 from './screens/notfound404/NotFound404'
import Cart from './screens/cart/Cart'
import Category from './screens/category/Category'
import Detail from './screens/detail/Detail'


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/categoria/:idCategoria' element={<Category />} />
        <Route path='/detalle/:idDetalle' element={<Detail />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
