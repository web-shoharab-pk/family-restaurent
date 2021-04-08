import React, { useEffect, useState } from 'react';
import './Diner.css'
import DinerFood from '../DinerFood/DinerFood';

const Diner = () => {

    const [dinner, setDinner] = useState([])
    
    useEffect(() => {
        fetch('https://blooming-reaches-15120.herokuapp.com/dinnerfoods')
            .then(res => res.json())
            .then(data => {
                setDinner(data)
            })
    }, [])


    return (
        <div className="container "> 
            <div className="dinnerFoods  mt-3 p-3">       
                    {
                        dinner.map(food => <DinerFood key={food._id} food={food} />)
                    } 
            </div>
        </div>
    );
};

export default Diner;