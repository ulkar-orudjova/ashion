import React from 'react'
import './Carousel.scss'
import Foto from './img/carousel.jpg'


function Carousel() {
  return (
    <>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Foto} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <span>The Chloe Collection</span>
                        <h1>The Project Jacket</h1>
                        <a href="/shop"> SHOP NOW</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Foto} class="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <span>The Chloe Collection</span>
                        <h1>The Project Jacket</h1>
                        <a href="/shop"> SHOP NOW</a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={Foto} class="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <span>The Chloe Collection</span>
                        <h1>The Project Jacket</h1>
                        <a href="/shop"> SHOP NOW</a>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
    </>
  )
}

export default Carousel