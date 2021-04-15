import React, { useEffect, useState } from 'react';
import DinerFood from '../DinerFood/DinerFood';
import './Diner.css';

const Diner = () => {

    const [dinner, setDinner] = useState([])
    const [spinner, setSpinner] = useState(null)

    useEffect(() => {
        fetch('https://blooming-reaches-15120.herokuapp.com/dinnerfoods')
            .then(res => res.json())
            .then(data => {
                setDinner(data)
                setSpinner(data)
            })
    }, [])


    return (
        <div className="container ">
            {
                spinner
                    ? <div className="dinnerFoods  mt-3 p-3">
                        {
                            dinner.map(food => <DinerFood key={food._id} food={food} />)
                        }
                    </div>
                    :
                    <div class="d-flex justify-content-center mt-5">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </div>
    );
};

export default Diner;