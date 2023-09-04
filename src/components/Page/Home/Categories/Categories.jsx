import React from 'react'
import "./Categories.scss"

function Categories() {
    
  return (
     <>
        <section className='categories'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 ps-0 p-2 pb-0">
                        <div className="categories_item categories_light_item bg" style={{backgroundImage:"url(https://preview.colorlib.com/theme/ashion/img/categories/category-1.jpg.webp)"}}>
                            <div className="categories_text">
                                <h1>Women’s fashion</h1>
                                <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida.</p>
                                <a href="#!">SHOP NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 p-2 ps-0 pb-0">
                                <div className="categories_item bg" style={{backgroundImage:"url(https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg.webp)", height:"270px"}}>
                                    <div className="categories_text">
                                        <h4 className='mb-1'>Men’s fashion</h4>
                                        <p className='mb-1'>358 items</p>
                                        <a href="#!">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 ps-0 p-2 pb-0">
                                <div className="categories_item bg" style={{backgroundImage:"url(https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg.webp)", height:"270px"}}>
                                    <div className="categories_text">
                                        <h4 className='mb-1'>Kid’s fashion</h4>
                                        <p className='mb-1'>273 items</p>
                                        <a href="#!">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 p-2 ps-0 pb-0">
                                <div className="categories_item bg" style={{backgroundImage:"url(https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg.webp)", height:"270px"}}>
                                    <div className="categories_text">
                                        <h4 className='mb-1'>Cosmetics</h4>
                                        <p className='mb-1'>159 items</p>
                                        <a href="#!">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 p-2 ps-0">
                                <div className="categories_item bg" style={{backgroundImage:"url(https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg.webp)", height:"270px"}}>
                                    <div className="categories_text">
                                        <h4 className='mb-1'>Accessories</h4>
                                        <p className='mb-1'>792 items</p>
                                        <a href="#!">SHOP NOW</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     </>  
    
  )
}

export default Categories