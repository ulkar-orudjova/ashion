import React from 'react'
import Categories from './Categories/Categories'
import Product from './Product/Product'
import Carousel from './Carousel/Carousel'
import Trend from './Trend/Trend'
import Services from './Services/Services'


function Home() {
  return (
    <>
        <Categories />
        <Product />
        <Carousel />
        <Trend />
        <Services />
    </>
  )
}

export default Home