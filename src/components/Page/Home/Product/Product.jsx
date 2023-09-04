import React from 'react'
import { useState } from 'react'
import './Product.scss'
import ProductCard from './ProductCard/ProductCard'

function Product() {
    const [query, setQuery] = useState("");

    const products = [
        {
            id: 1,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-1.jpg.webp",
            title: "Buttons tweed blazer",
            price: "59$"
        },
        {
            id: 2,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-2.jpg.webp",
            title: "Flowy striped skirt",
            price: "53$"
        },
        {
            id: 3,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-3.jpg.webp",
            title: "Cotton Dress",
            price: "79$"
        },
        {
            id: 4,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-4.jpg.webp",
            title: "Slim striped pocket shirt",
            price: "39$"
        },
        {
            id: 5,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-5.jpg.webp",
            title: "Fit micro corduroy shirt",
            price: "45$"
        },
        {
            id: 6,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-6.jpg.webp",
            title: "Zara blazer",
            price: "89$"
        },
        {
            id: 7,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-7.jpg.webp",
            title: "Tropical Kimono",
            price: "29$"
        },
        {
            id: 8,
            image: "https://preview.colorlib.com/theme/ashion/img/product/product-8.jpg.webp",
            title: "Water resistant backpack",
            price: "49$"
        },
        {
            id: 9,
            image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-1.jpg.webp",
            title: "Buttons tweed blazer",
            price: "62$"
        },
        {
            id: 10,
            image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-2.jpg.webp",
            title: "Flowy striped skirt",
            price: "109$"
        },
        {
            id: 11,
            image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-3.jpg.webp",
            title: "Cotton T-Shirt",
            price: "81$"
        },
        {
            id: 12,
            image: "https://preview.colorlib.com/theme/ashion/img/product/related/rp-4.jpg.webp",
            title: "Slim striped pocket shirt",
            price: "59.99$"
        }
    ]
  return (
    <> 
        <section className='product'>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-5 col-md-4">
                        <div className="section_title">
                            <h4>New Product</h4>
                        </div> 
                    </div>
                    <div className="col-lg-4 offset-lg-3 col-md-8">
                       <input onInput={(e) => setQuery(e.target.value)} type="text" placeholder='Search'/>
                    </div>
                </div>
                <div className="row property_gallery">
                    {
                        products.filter(i => i.title.toLowerCase().includes(query.toLowerCase())).map(function(par){
                            const {id, image, title, price} = par;
                            return  <ProductCard  key = {id} 
                            image = {image} 
                            title = {title} 
                            price = {price}
                        />
                        })
                    }
                   
                </div>
                
            </div>
        </section> 

    </>
  )
}

export default Product