import React from 'react'
import "./Footer.scss"
import Pictures from './Pictures/Pictures'

function Footer() {

  const pictures = [
    {
      id: 1,
      image: "https://preview.colorlib.com/theme/ashion/img/instagram/insta-1.jpg.webp"
    },
    {
      id: 2,
      image: "https://preview.colorlib.com/theme/ashion/img/instagram/insta-2.jpg.webp"
    },
    {
      id: 3,
      image: "https://preview.colorlib.com/theme/ashion/img/instagram/insta-3.jpg.webp"
    },
    {
      id: 4,
      image: "https://preview.colorlib.com/theme/ashion/img/instagram/insta-4.jpg.webp"
    },
    {
      id: 5,
      image: "https://preview.colorlib.com/theme/ashion/img/instagram/insta-5.jpg.webp"
    },
    {
      id: 6,
      image: "https://preview.colorlib.com/theme/ashion/img/instagram/insta-6.jpg.webp"
    }

  ]
  return (
    <footer className='footer'>
      <div className="container-fluid ">
        <div className="row mb-5">
          {
           pictures.map(par => <Pictures image = {par.image} key = {par.id}/>)
          }
        </div>
      </div>
     

      <div className="container">
        <div className="row my-4">
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="footer_about">
              <div className="footer_logo mb-2">
                <a href="#!">
                  <img src= "https://preview.colorlib.com/theme/ashion/img/logo.png.webp" alt='ashion'></img>
                </a>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cilisis.
              </p>
              <div className="footer_payment mb-3">
                <a href="#!" className='me-2'>
                  <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-1.png.webp" alt="#" />
                </a>
                <a href="#!"  className='me-2'>
                  <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-2.png.webp" alt="#" />
                </a>
                <a href="#!"  className='me-2'>
                  <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-3.png.webp" alt="#" />
                </a>
                <a href="#!"  className='me-2'>
                  <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-4.png.webp" alt="#" />
                </a>
                <a href="#!">
                  <img src="https://preview.colorlib.com/theme/ashion/img/payment/payment-5.png.webp" alt="#" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-5">
            <div className="footer_widget mb-3">
              <h6>QUICK LINKS</h6>
              <ul>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="/blog">Blogs</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer_widget mb-3">
                <h6>ACCOUNT</h6>
                <ul>
                  <li>
                    <a href="#!">My Account</a>
                  </li>
                  <li>
                    <a href="#!">Orders Tracking</a>
                  </li>
                  <li>
                    <a href="/checkout">Checkout</a>
                  </li>
                  <li>
                    <a href="#!">Wishlist</a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="footer_newsletter">
              <h6 className='mb-3'>NEWSLETTER</h6>
              <form action="#">
                <input type="text" placeholder='Email'/>
                <button type='button' className='site-btn'>SUBSCRIBE</button>
              </form>
              <div className="footer_social mt-3">
                <a href="#!">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-youtube"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_copyright_text">
              <p>
                Copyright © 2023 All rights reserved | This template is made with 
                <i className="bi bi-heart-fill ms-1 me-1" style={{color:"red"}}></i>
                by <a href="https://colorlib.com"> Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer