import React from 'react'
import "./Header.scss"

function Header() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
               
                <a className="navbar-brand ms-3 col-xl-3 " href="#!"><img src= "https://preview.colorlib.com/theme/ashion/img/logo.png.webp" alt='ashion'></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> 
                </button>
                
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/woman">Woman's</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/man">Man's</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="/checkout">Checkout</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" aria-disabled="true"  href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-disabled="true"  href="/contact">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <a href='#!' className='color position-relative pt-1'>
                            <i className="bi bi-heart-fill"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill color ">
                                7
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </a>
                        <a href='/shop' className='color mx-3 position-relative pt-1'>
                            <i className="bi bi-cart3"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill color ">
                                5
                                <span class="visually-hidden">unread messages</span>
                            </span>
                        </a>
                    </form>
                </div>
            </div>
        </nav> 
    
    </>
  )
}

export default Header