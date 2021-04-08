import React from 'react';
import './Footer.css';
import slide2 from '../images/slider2.png'

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row py-3 px-5">

                    <div className="col-md-6">
                        <div>
                            <img className="w-50" src={slide2} alt="" />
                            <p className="mt-5" style={{ textAlign: 'left' }}>Copyright 2021 all rights reserve by web-shoharab-pk </p>
                        </div>
                    </div>

                    <div className="col-md-3 d-flex links justify-content-end align-items-center">
                        <div style={{ textAlign: 'left' }}>
                            <a href="/" target="_blank" >About Online food</a> <br />
                            <a href="/" target="_blank">Read Our Blog</a> <br />
                            <a href="/" target="_blank">Sign Up to deliver</a> <br />
                            <a href="/" target="_blank">And Your restaurent</a>
                        </div>
                    </div>
                    <div className="col-md-3 d-flex links justify-content-end align-items-center">
                        <div style={{ textAlign: 'left' }}>
                            <a href="/" target="_blank">Get Help</a> <br />
                            <a href="/" target="_blank">Read FAQs</a> <br />
                            <a href="/" target="_blank">View all cities</a> <br />
                            <a href="/" target="_blank">restaurent near me</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="d-flex links  justify-content-evenly align-items-center p-3">
                    
                            <a href="/" >Privacy Policy</a>  
                            <a href="/">Teams of Use</a>  
                            <a href="/">Pricing</a>  
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;