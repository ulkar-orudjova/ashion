import React from 'react'
import { useState } from 'react'
import './Woman.scss'
import WomanCard from './WomanCard/WomanCard'

function Woman() {

  const [query, setQuery] = useState("");

  const dress = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-1.jpg.webp",
      title: "Dilvin tweed blazer",
      price: "62$"
    },
    {
        id: 2,
        image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-2.jpg.webp",
        title: "Flowy striped skirt",
        price: "109$"
    },
    {
        id: 3,
        image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-3.jpg.webp",
        title: "Bershka dress",
        price: "81$"
    },
    {
      id: 4,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-7.jpg.webp",
      title: "Tropical Kimono",
      price: "29$"
    },
    {
      id: 5,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-6.jpg.webp",
      title: "Zara blazer",
      price: "89$"
    },
    {
      id: 6,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-3.jpg.webp",
      title: "Cotton Dress",
      price: "79$"
    },
    {
      id: 7,
      image: "https://preview.colorlib.com/theme/ashion/img/product/product-1.jpg.webp",
      title: "Buttons tweed blazer",
      price: "59$"
    },
    {
      id: 8,
      image: "https://preview.colorlib.com/theme/ashion/img/shop/shop-3.jpg.webp",
      title: "Mango Dress",
      price: "99$"
    },
    {
      id: 9,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-6.jpg.webp",
      title: "Water resistant zips backpack",
      price: "34$"
    },
    {
      id: 10,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-8.jpg.webp",
      title: "Croc-effect bag",
      price: "9$"
    },
    {
      id: 11,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-2.jpg.webp",
      title: "Croc-effect bag",
      price: "29$"
    },
    {
      id: 12,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-7.jpg.webp",
      title: "Circular pendant earrings",
      price: "8$"
    },
    {
      id: 13,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-1.jpg.webp",
      title: "Furry hooded parka",
      price: "109$"
    },
    {
      id: 14,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-5.jpg.webp",
      title: "Ankle-cuff sandals",
      price: "53$"
    },
    {
      id: 15,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-4.jpg.webp",
      title: "Dark wash Xavi jeans",
      price: "38$"
    },
    {
      id: 16,
      image: " https://preview.colorlib.com/theme/ashion/img/shop/shop-9.jpg.webp",
      title: "Stradivarius shoes",
      price: "88$"
    },
  ]

  return (
    <>
        
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-2 col-md-3 col-sm-9">
                    <div className='logo'>
                      <h4 >WOMAN'S</h4>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4">
                      <select className="form-select" aria-label="Default select example">
                        <option selected> Categories</option>
                        <option value="1">Coats</option>
                        <option value="2">Jackets</option>
                        <option value="3">Dresses</option>
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
                  <div className="women_search">
                      <input onInput={(e) => setQuery(e.target.value)} type="text" placeholder='Search'/>
                  </div>
                </div>
               
            </div>
            <div className="row">
              {
                  dress.filter(i => i.title.toLowerCase().includes(query.toLowerCase())).map(function(par){
                    const {id, image, title, price} = par;
                    return  <WomanCard  key = {id} 
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

export default Woman