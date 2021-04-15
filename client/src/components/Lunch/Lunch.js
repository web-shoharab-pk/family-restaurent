import React, { useEffect, useState } from 'react';
import LunchFood from '../LunchFood/LunchFood';

const Lunch = () => {
    const [lunch, setLunch] = useState([])
    const [spinner, setSpinner] = useState(null)

    useEffect(() => {
        fetch('https://blooming-reaches-15120.herokuapp.com/lunchfoods')
            .then(res => res.json())
            .then(data => {
                setLunch(data)
                setSpinner(data)
            })
    }, [])
    return (
        <div>
          
            <div className="container ">
            { spinner ?   <div className="breakfasrFoods mt-3 p-3">
                    {
                        lunch.map(food =>  <LunchFood key={food._id} food={food} />)
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
        </div>
    );
};

export default Lunch;