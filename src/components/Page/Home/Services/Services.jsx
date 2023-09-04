import React from 'react'
import './Services.scss'

function Services() {
  return (
    <>
        <section className="services">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="services_item">
                        <i class="bi bi-car-front-fill"></i>
                        <h6>Free Shipping</h6>
                        <p>For all oder over $99</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="services_item">
                        <i class="bi bi-cash"></i>
                        <h6>Money Back Guarantee</h6>
                        <p>If good have Problems</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="services_item">
                        <i class="bi bi-person-gear"></i>
                        <h6>Online Support 24/7</h6>
                        <p>Dedicated support</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="services_item">
                        <i class="bi bi-headphones"></i>
                        <h6>Payment Secure</h6>
                        <p>100% secure payment</p>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services