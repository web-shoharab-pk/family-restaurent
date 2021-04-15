import React, { useEffect, useState } from 'react';
import deleteLogo from '../icons/deletelogo.png';
import editLogo from '../icons/edit.png';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css';

const Admin = () => {

    const [foods, setFoods] = useState([])
    console.log(foods);
    useEffect(() => {
        fetch('https://blooming-reaches-15120.herokuapp.com/allfoods')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div>
            <div className="row">
                <div style={{ height: '100%', backgroundColor: 'black' }} className="col-md-2 ">
                    <Sidebar />

                </div>
                <div className="col-md-8 p-3 d-flex justify-content-around">
                    <div className="allfoods rounded">
                        <div className="d-flex justify-content-between mt-3 p-3">
                            <h3>Food Name</h3>
                            <h3>Food Price</h3>
                            <h3>Action</h3>
                        </div>
                        <hr />
                        {
                            foods.map(food =>
                                <div className="d-flex justify-content-between p-3">
                                    <h4 className="mx-3">{food.foodName}</h4>
                                    <h4 className="mx-3">{food.foodPrice}</h4>
                                    <div className="mx-3">
                                        <button className="btn btn-success p-0"><img className="w-50" src={editLogo} alt="" /></button>
                                        <button className="btn p-0 mt-1"><img className="w-50" src={deleteLogo} alt="" /> </button>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Admin;