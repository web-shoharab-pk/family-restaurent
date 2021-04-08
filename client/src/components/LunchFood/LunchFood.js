import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DetailsContext } from '../../App';
import './LunchFood.css'

const LunchFood = ({ food }) => {

    const { foodName, foodPrice, imageURL, foodDetails, _id } = food;

    const { setCheckout } = useContext(DetailsContext);
    const history = useHistory()
    const foodCheckout = (id) => {

        console.log(id)
        fetch(`https://blooming-reaches-15120.herokuapp.com/checkout/${id}`)
            .then(res => res.json())
            .then(data => {
                setCheckout(data[0]);
                history.push('/checkout')
            })

    }
    return (
        <div>
            <div className="cardDiv ">
                <div className="card" style={{ width: '20rem', height: '32rem' }}>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{foodName}</h5>
                        <p className="card-text">{foodDetails} .</p>
                        <h3 className="card-title">{foodPrice}</h3>
                        <Link onClick={() => foodCheckout(_id)} to="#/" className="btn btn-primary">ORDER NOW</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LunchFood;