import React from 'react';
import { Link } from 'react-router-dom';
import './DinerFood.css'

const DinerFood = ({ food }) => {
    const { foodName, foodPrice, imageURL, foodDetails } = food;
    return (
        <div>
            
                <div className="cardDiv">
                    <div className="card" style={{ width: '20rem', height: '32rem' }}>
                        <img src={imageURL} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{foodName}</h5>
                            <p className="card-text">{foodDetails} .</p>
                            <h3 className="card-title">{foodPrice}</h3>
                            <Link to="#/" className="btn btn-primary">Go somewhere</Link>
                        </div>
                    </div>
               
            </div>
        </div>
    );
};

export default DinerFood;