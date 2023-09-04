import React from 'react'
import { useState } from 'react'

function ShopCard(props) {
  const {img, title, price, total, id, deleteShopping} = props;
  const [count, setCount] = useState(0);

  function azalt(){
    if(count > 0){
      setCount(count - 1);
    }
  }

  function artir(){
    setCount(count + 1);
  }
  return (
    <>
                    <tr>
                        <td className="cart_product_item">
                          <img src={img} alt="..." />
                          <div className="cart_product_item_title">
                            <h6>{title}</h6>
                            <div className='rating'>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                              <i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </td>
                        <td className="cart_price">{price}</td>
                        <td className="cart_quantity">
                          <div className='pro-qty'>
                            <span onClick={azalt} className='qtybtn'>-</span>
                            <div className='text'>{count}</div>
                            <span onClick={artir} className='qtybtn'>+</span>
                          </div>
                        </td>
                        <td className="cart_total">{total}</td>
                        <td className="cart_close">
                            <i onClick={() => deleteShopping(id)} className="bi bi-x"></i>
                        </td>
                    </tr>
    </>
  )
}

export default ShopCard