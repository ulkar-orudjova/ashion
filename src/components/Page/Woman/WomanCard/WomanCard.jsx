import React from 'react'

function WomanCard(props) {
  return (
    <>
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="product_item text-center mb-5">
                <div className='product_item_picture'>
                    <img className='bg' src={props.image} alt="..." />
                    <ul className="product_hover">
                        <li>
                            <a href="#!">
                                <i className="bi bi-arrows-angle-expand"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="bi bi-heart"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="bi bi-cart"></i>
                            </a>
                        </li>
                    </ul>
                </div> 
               
                <div className='product_item_text mt-3' >
                    <h6 className='product_title'>{props.title}</h6>
                    <div className='product_rating'>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <h6 className='product_price'> {props.price} </h6>
                </div>
                
            </div>
        </div>
    
    </>
  )
}

export default WomanCard