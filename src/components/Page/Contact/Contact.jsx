import React from 'react'
import "./Contact.scss"

function Contact() {
  return (
    <section className='contact'>
        <div className="container">
            <div className="row mt-5 mb-4">
                <div className="col-lg-6 col-md-6">
                    <div className="contact_content">
                        <div className="contact_address mb-5">
                            <h5 className='mb-3'>CONTACT INFO</h5>
                            <ul>
                                <li>
                                    <h6>
                                        <i className="bi bi-geo-alt-fill"></i> Address
                                    </h6>
                                    <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
                                </li>
                                <li>
                                    <h6>
                                        <i className="bi bi-telephone-fill"></i> Phone
                                    </h6>
                                    <p>125-711-811 / 125-668-886</p>
                                </li>
                                <li>
                                    <h6>
                                        <i className="bi bi-headphones"></i> Support
                                    </h6>
                                    <p>Support.photography@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className="contact_form">
                            <h5 className='mb-4'>SEND MESSAGE</h5>
                            <form action="#">
                                <div>
                                    <input className="form-control mb-3 " type="text" placeholder='Name' />
                                    <input className="form-control mb-3"  type="text" placeholder='Email' />
                                    <input className="form-control mb-3"  type="text" placeholder='Website' />
                                    <textarea className="form-control mb-3" rows="3" placeholder='Message'></textarea>
                                    <button className='btn btn-danger mb-5'>Send Message</button>
                                </div>
                         
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="contact_map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54956.87251499294!2d-88.2732636828884!3d30.583062935741857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889bb46dd9e18923%3A0xa0566ba863772245!2sRinla%20Ave%2C%20Mobile%2C%20AL%2036619%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2saz!4v1691971598809!5m2!1str!2saz" title='location'  style={{border:"0", height:"650px", width:"100%"}}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact