import React, { useEffect, useState } from 'react';
import './Breakfast.css'
import BreakfastFood from '../BreakfastFood/BreakfastFood';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([])

    useEffect(() => {
        fetch('http://localhost:5500/breakfastfoods')
            .then(res => res.json())
            .then(data => {
                setBreakfast(data)
            })
    }, [])
    return (
        <div className="container ">
            <div className="breakfasrFoods mt-3 p-3">
                {
                    breakfast.map(food =>  <BreakfastFood key={food._id} food={food} /> )
                }
            </div>
        </div>
    );
};

export default Breakfast;