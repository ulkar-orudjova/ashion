import React from 'react'
import './Shopping.scss'

function Shopping() {
  return (
    <>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="cart_btn">
                    <a href="#!">Continue Shopping</a>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="cart_btn update_btn">
                    <a href="#!">
                        <i class="bi bi-arrow-clockwise"></i>
                        Update Cart
                    </a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="discount_content">
                    <h6>DISCOUNT CODES</h6>
                    <form action="#">
                        <input type="text" placeholder='Enter your coupon code'/>
                        <button type='button' className='site-btn'>APPLY</button>
                    </form>
                </div>
            </div>
            <div className="col-lg-4 offset-lg-2 mb-5">
                <div className="cart_total_proceed">
                    <h6>CART TOTAL</h6>
                    <ul>
                        <li>
                            Subtotal
                            <span> $ 750.0</span>
                        </li>
                        <li>
                            Total
                            <span> $ 750.0</span>
                        </li>
                    </ul>
                    <a href="/checkout" className='danger-btn'>Proceed to checkout</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shopping