import React from 'react'
import { useState } from 'react'
import ShopCard from './ShopCard/ShopCard'
import Shopping from './Shopping/Shopping'
import './Shop.scss'

function Shop() {
  const [shopping, setShopping] = useState([
    {
      id: 1,
      img: "https://preview.colorlib.com/theme/ashion/img/trend/bs-2.jpg.webp",
      title:"Zip-pockets pebbled tote briefcase",
      price: "$ 150.0",
      total: "$ 300.0"
    },
    {
      id: 2,
      img: "https://preview.colorlib.com/theme/ashion/img/trend/f-3.jpg.webp",
      title:"Flap cross-body bag",
      price: "$ 100.0",
      total: "$ 100.0"
    },
    {
      id: 3,
      img: "https://preview.colorlib.com/theme/ashion/img/shop-cart/cp-3.jpg.webp",
      title:"Black jean",
      price: "$ 85.0",
      total: "$ 170.0"
    },
    {
      id: 4,
      img: "https://preview.colorlib.com/theme/ashion/img/shop-cart/cp-4.jpg.webp",
      title:"Cotton Shirt",
      price: "$ 55.0",
      total: "$ 110.0"
    },
    {
      id: 5,
      img: "https://preview.colorlib.com/theme/ashion/img/trend/bs-3.jpg.webp",
      title:"Round leather bag",
      price: "$ 70.0",
      total: "$ 70.0"
    }
  ]);

  const deleteShopping = id => setShopping(shopping.filter(i => i.id !== id));
  
  return (
    <>
      <section className='shop'>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="shop_table my-5">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                      shopping.map(function(par){
                        const {id, img, title, price, total} = par;
                        return  <ShopCard 
                        id = {id}
                        key = {id}
                        img = {img}
                        title = {title}
                        price = {price}
                        total = {total}
                        deleteShopping = {deleteShopping}
                        />
                      })
                     
                     }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <Shopping />
            
          </div>
      </section>
    </>
  )
}

export default Shop