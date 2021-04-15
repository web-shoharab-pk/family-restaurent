import React, { useEffect, useState } from 'react';
import BreakfastFood from '../BreakfastFood/BreakfastFood';
import './Breakfast.css';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([])
    const [spinner, setSpinner] = useState(null)

    useEffect(() => {
        fetch('https://blooming-reaches-15120.herokuapp.com/breakfastfoods')
            .then(res => res.json())
            .then(data => {
                setBreakfast(data)
                setSpinner(data)
            })
    }, [])
    return (
        <div className="container ">
            {
                spinner ?
                    <div className="breakfasrFoods mt-3 p-3">
                        {
                            breakfast.map(food => <BreakfastFood key={food._id} food={food} />)
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

export default Breakfast;