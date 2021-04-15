import React, { useContext, useEffect, useState } from 'react';
import { DetailsContext } from '../../App';
import './Orderedfood.css';

const Orderedfood = () => {

    const { loggedUser } = useContext(DetailsContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://blooming-reaches-15120.herokuapp.com/orderedfood/${loggedUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                console.log(data)
            })
    }, [loggedUser.email])

    return (
        <div className="container">
            <h1 className="d-flex mt-5">Total Order: {orders.length}</h1>
            <div className="orderDetails p-3 rounded">
                <div className="d-flex justify-content-between mt-3">
                    <h2>Name</h2>
                    <h2>Food Name</h2>
                    <h2>Food Price</h2>
                    <h2>Address</h2>
                    <h2>Date</h2>
                </div>
                <hr />
                {
                    orders.map(order =>
                        <div className="d-flex justify-content-between">
                            <h4>{order.name}</h4>
                            <h4>{order.foodName}</h4>
                            <h4>{order.foodPrice}</h4>
                            <h4>{order.address}</h4>
                            <h4>{order.date}</h4>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Orderedfood;