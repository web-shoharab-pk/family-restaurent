import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
          
         
             
            <div className="container">
                <div className="fw-bold d-flex justify-content-evenly">
                    <Link className="food-categories fs-3" to="/breakfast">Break Fast</Link>
                    <Link className="food-categories fs-3" to="/lunch">Lunch</Link>
                    <Link className="food-categories fs-3" to="/diner">Diner</Link>
                </div>
            </div>
      
            <div>

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
 