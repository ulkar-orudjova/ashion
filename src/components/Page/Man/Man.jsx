import React from 'react'
import ManCard from './ManCard/ManCard'
import { useState } from 'react'
import './Man.scss'

function Man() {

  const [query, setQuery] = useState("");

  const manproducts = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-2.jpg.webp",
      title: "Flowy striped skirt",
      price: "53$"
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-5.jpg.webp",
      title: "Stradivarius micro corduroy shirt",
      price: "45$"
    },
    {
      id: 3,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-8.jpg.webp",
      title: "Cotton resistant backpack",
      price: "49$"
    },
    {
      id: 4,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-4.jpg.webp",
      title: "Slim striped pocket shirt",
      price: "39$"
    },
    {
      id: 5,
      image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-4.jpg.webp",
      title: "Zara striped pocket shirt",
      price: "59.99$"
    },
    {
      id: 6,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-4.jpg.webp",
      title: "Dark wash Xavi jeans",
      price: "38$"
    },
    {
      id: 7,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-1.jpg.webp",
      title: "Furry hooded parka",
      price: "109$"
    },
    {
      id: 8,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-2.jpg.webp",
      title: "Defacto Xavi jeans",
      price: "79$"
    }
  
  ]
  return (
    <>
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-2 col-md-3 col-sm-9">
                    <div className='logo'>
                      <h4 >MAN'S</h4>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                      <select className="form-select" aria-label="Default select example">
                        <option selected> Categories</option>
                        <option value="1">Coats</option>
                        <option value="2">Jackets</option>
                        <option value="3">Pants</option>
                        <option value="4">Shirts</option>
                        <option value="5">T-shirts</option>
                        <option value="6">Jeans</option>
                      </select>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                     <select className="form-select" aria-label="Default select example">
                        <option selected> Shop By Size</option>
                        <option value="1">XS</option>
                        <option value="2">S</option>
                        <option value="3">M</option>
                        <option value="4">L</option>
                        <option value="5">XL</option>
                        <option value="6">XXL</option>
                      </select>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                     <select className="form-select" aria-label="Default select example">
                        <option selected> Shop By Color</option>
                        <option value="1">Blacks</option>
                        <option value="2">Whites</option>
                        <option value="3">Reds</option>
                        <option value="4">Greys</option>
                        <option value="5">Blues</option>
                        <option value="6">Beige Tones</option>
                        <option value="7">Greens</option>
                        <option value="8">Yellows</option>
                      </select>
                </div>
                <div className='col-lg-4 col-md-8 col-sm-9'>
                  <div className="man_search">
                      <input onInput={(e) => setQuery(e.target.value)} type="text" placeholder='Search'/>
                  </div>
                </div>              
            </div>
           
            <div className="row">
              {
                manproducts.filter(i => i.title.toLowerCase().includes(query.toLowerCase())).map(function(par){
                  const { id, image, title, price} = par
                  return <ManCard 
                    id = {id}
                    key = {id}
                    image = {image}
                    title = {title}
                    price = {price}
                  />
                })
              }
                
            </div>
        </div>
    </>
  )
}

export default Man