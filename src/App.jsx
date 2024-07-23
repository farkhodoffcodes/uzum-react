import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './pages/Cart'
import Favourite from './pages/Favourite'
import Faq from './pages/Faq'
import DeliveryPoints from './pages/DeliveyPoints'
import Orders from './pages/Orders'
import NotFound from './pages/NotFound'
import Careers from './pages/Careers'

const App = () => {
  const [cart, setCart] = useState([]);


  const addToCart = (item) => {
    return (
      setCart([...cart, item])
    )
  }


   return (
    <>
        <Header length={cart.length}/>
              <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home addToCart={addToCart} />}/>
                        <Route path='/cart' element={<Cart addToCart={addToCart} cart={cart} length={cart.length}/>}/>
                        <Route path='/favourite' element={<Favourite/>}/>
                        <Route path='/faq' element={<Faq/>}/>
                        <Route path='/delivery-points' element={<DeliveryPoints/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/careers' element={<Careers/>}/>
                        <Route path='/*' element={<NotFound/>}/>
                  </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App