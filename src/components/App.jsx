import React from 'react'
import Layout from './Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Woman from './Page/Woman/Woman'
import Man from './Page/Man/Man'
import Shop from './Page/Shop/Shop'
import Checkout from './Page/Checkout/Checkout'
import Blog from './Page/Blog/Blog'
import Contact from './Page/Contact/Contact'



function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Layout />} >
              <Route index element = {<Home />} />
              <Route path='woman' element = {<Woman />} />
              <Route path='man' element = {<Man />} />
              <Route path='shop' element = {<Shop/>} />
              <Route path='checkout' element = {<Checkout />} />
              <Route path='blog' element = {<Blog/>} />
              <Route path='contact' element = {<Contact />} />
            </Route>
          </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App