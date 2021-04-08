import React, { useEffect, useState } from 'react';
import LunchFood from '../LunchFood/LunchFood';

const Lunch = () => {
    const [lunch, setLunch] = useState([])

    useEffect(() => {
        fetch('https://blooming-reaches-15120.herokuapp.com/lunchfoods')
            .then(res => res.json())
            .then(data => {
                setLunch(data)
            })
    }, [])
    return (
        <div>
            <div className="container ">
                <div className="breakfasrFoods mt-3 p-3">
                    {
                        lunch.map(food =>  <LunchFood key={food._id} food={food} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Lunch;