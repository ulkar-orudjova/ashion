import React from 'react'
import './Checkout.scss'

function Checkout() {
  return (
    <>
        <section className='checkout'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h6 className='coupon_link'>
                            <i class="bi bi-tag"></i>
                            <a href="#!">Have a coupon?</a>
                             Click here to enter your code.
                        </h6>
                    </div>
                </div>
                <form action="" className='checkout_form'>
                    <div className="row">
                        <div className="col-lg-8">
                            <h5>Billing Detail</h5>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout_form_input">
                                        <p>
                                            First Name 
                                            <span> *</span>
                                        </p>
                                        <input type="text" className='form-control'/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout_form_input">
                                            <p>
                                                Last Name 
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-3'/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="checkout_form_input">
                                            <p>
                                                Country
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-4'/>
                                    </div>
                                    <div className="checkout_form_input">
                                            <p>
                                               Address
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-4' placeholder='Street Address'/>
                                            <input type="text" className='form-control mb-4' placeholder='Apartment suite, unite ect ( optimal )'/>
                                    </div>
                                    <div className="checkout_form_input">
                                            <p>
                                                Town/City
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-4'/>
                                    </div>
                                    <div className="checkout_form_input">
                                            <p>
                                                Country/State
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-4'/>
                                    </div>
                                    <div className="checkout_form_input">
                                            <p>
                                                PostCode/Zip
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-3'/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout_form_input">
                                        <p>
                                            Phone 
                                            <span> *</span>
                                        </p>
                                        <input type="text" className='form-control mb-4'/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="checkout_form_input">
                                        <p>
                                            Email 
                                            <span> *</span>
                                        </p>
                                        <input type="email" className='form-control mb-4'/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="checkout_form_checkbox">
                                        <input className="form-check-input me-2" type="checkbox" />
                                        <label className="form-check-label" /> Create an acount?
                                        <p className='my-3'>
                                            Create am acount by entering the information below. If you are a returing customer
                                             login at the <br></br>
                                             top of the page
                                        </p>
                                    </div>
                                    <div className="checkout_form_input">
                                            <p>
                                                Account Password
                                                <span> *</span>
                                            </p>
                                            <input type="password" className='form-control mb-4'/>
                                    </div>
                                    <div className="checkout_form_checkbox my-3">
                                        <input className="form-check-input me-2" type="checkbox" />
                                        <label className="form-check-label" /> Note about your order, e.g, special noe for delivery
                                    </div>
                                    <div className="checkout_form_input">
                                            <p>
                                                Oder Notes
                                                <span> *</span>
                                            </p>
                                            <input type="text" className='form-control mb-4' placeholder='Note about your order, e.g, special noe for delivery'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout_order">
                                <h5>Your Order</h5>
                                <div className="checkout_order_product">
                                    <ul>
                                        <li>
                                            <span className='top_text'>Product</span>
                                            <span className='top_text_right'>Total</span>
                                        </li>
                                        <li>
                                            01. Chain buck bag 
                                            <span>$ 300.0</span>
                                        </li>
                                        <li>
                                            02. Zip-pockets pebbled <br />
                                            tote briefcase
                                            <span>$ 170.0</span>
                                        </li>
                                        <li>
                                            03. Black jean
                                            <span>$ 170.0</span>
                                        </li>
                                        <li>
                                            04. Cotton shirt
                                            <span>$ 110.0</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="checkout_order_total">
                                    <ul>
                                        <li>
                                            Subtotal 
                                            <span>$ 750.0</span>
                                        </li>
                                        <li>
                                            Total 
                                            <span>$ 750.0</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="checkout_order_widget">
                                        <input className="form-check-input me-2" type="checkbox" />
                                        <label className="form-check-label" /> Create an acount?
                                        <p className='my-3'>
                                            Create am acount by entering the information below. If you are a returing customer
                                             login at the <br></br>
                                             top of the page
                                        </p>
                                        <div className='mb-2'>
                                            <input className="form-check-input me-2" type="checkbox" />
                                            <label className="form-check-label" /> Cheque payment
                                        </div>
                                        <div>
                                            <input className="form-check-input me-2" type="checkbox" />
                                            <label className="form-check-label" /> PayPal
                                        </div>
                                        <button className='btn btn-danger mt-3'>Place Oder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default Checkout