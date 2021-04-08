import React, { useContext } from 'react';
import { DetailsContext } from '../../App';
import Footer from '../Footer/Footer';
import './Home.css'
import homeDelivery from '../images/delivery.png';
import fastDelivary from '../images/slider1.png';
import goodRes from '../images/slider3.png';

const Home = () => {
    const { loggedUser } = useContext(DetailsContext);
    console.log(loggedUser);
    return (
        <div className="container mt-5">

            <div>
            <h2 className="d-flex">Why you chose us</h2> 
                <div className="card-group mt-3">
                   
                    <div className="card rounded mt-3 mx-3">
                        <img src={fastDelivary} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Fast Delivery</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> 
                        </div>
                    </div>
                    <div className="card rounded mt-3 mx-3">
                        <img src={goodRes} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Good Response</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p> 
                        </div>
                    </div>
                    <div className="card rounded mt-3 mx-3">
                        <img src={homeDelivery} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Home Delivery</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p> 
                        </div>
                    </div>
                </div>




            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
