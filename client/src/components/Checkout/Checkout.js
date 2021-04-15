import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { DetailsContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './Checkout.css';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const { checkout, loggedUser } = useContext(DetailsContext);
    const [shippingData, setShippingData] = useState(null)
    const { foodName, foodPrice, foodDetails, _id, foodCat } = checkout;

    const onSubmit = data => {

        setShippingData(data)

    };
    const handlePaymentSuccess = (paymentId, paymentInfo) => {
        const { example, exampleRequired } = shippingData;
        const { displayName, email } = loggedUser;
        const orderDetails = {
            name: displayName,
            email: email,
            foodName: foodName,
            foodPrice: foodPrice,
            foodDetails: foodDetails,
            distric: example,
            address: exampleRequired,
            date: (new Date().toDateString("dddd, mmmm, yyyy")), 
            paymentInfo:{paymentId, paymentInfo}
        }
        console.log(orderDetails);
        fetch(`https://blooming-reaches-15120.herokuapp.com/getOrder/${_id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
        history.push('/orderedfood')
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-md-2 mt-5">
                    <button className="mt-3 btn text-light btn-danger "><Link className="text-light fw-bold" to="/"> Back Home</Link></button>
                </div>
                <div style={{display: shippingData ? 'none' : 'block'}} className="col-md-5 mt-5">
                    <div className="orderAndProductDetails p-3 rounded">
                        <div className="d-flex d-flex justify-content-between">
                            <h3>Food Name</h3>  <h3>Price</h3> <h3>Category</h3>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <h4>{foodName}</h4>  <h3>{foodPrice}</h3> <h3>{foodCat}</h3>
                        </div>
                        <hr />


                        <div>
                            <form className=" mt-3" onSubmit={handleSubmit(onSubmit)}>

                                <div>
                                    <h2>Input your address</h2>
                                    <input className="form-control w-100 mt-5" defaultValue="distric" name="distric" required {...register("example")} />

                                    <input className="form-control w-100 mt-3" required {...register("exampleRequired", { required: true })} placeholder="home address" />
                                    {errors.exampleRequired && <span>This field is required</span>}

                                    <input className="form-control w-100 bg-primary mt-3 text-light fw-bold fs-4" value="Confirm Now" type="submit" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
                <div style={{display: shippingData ? 'block' : 'none'}} className="col-md-5">
                    <div className="mt-5">
                        <h1 className="text-success mb-3">Please Payment Now: {foodPrice}</h1>
                        <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}>

                        </ProcessPayment>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;