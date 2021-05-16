import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import './Foodsadded.css';

const Foodsadded = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState({});

    console.log(imageURL);
    const onSubmit = data => {
        console.log(data);
        const addFoodDetails = {
            foodName: data.name,
            foodDetails: data.description,
            foodPrice: data.price,
            foodCat: data.categories,
            imageURL: imageURL
        }
        console.log(addFoodDetails);

        const postURL = 'https://blooming-reaches-15120.herokuapp.com/addfood';
        fetch(postURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addFoodDetails)
        })
            .then(res => console.log("server site response", res))

    };



    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'e1f5a6095b7d9d00411e4c204ddebf7f')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h2 className="mt-5 p-3">family restaurent managment</h2> 
            <div className="row">
                <div style={{ height: '30vh ' , color: 'black' }} className="col-md-3 mt-5 me-5">
                    <br />
                    <h2 className="bg-light px-3">Food add section</h2> 
                    <Sidebar />

                </div>
             
                <div className="foodAddDiv mx-5 px-3 col-md-4  d-flex justify-content-between">
                    <form className="w-100 p-3" onSubmit={handleSubmit(onSubmit)} >
                        <Link to="/admin"><h1>Admin</h1> </Link>
                        <p style={{textAlign: 'left'}}>Food Name</p> 
                        <input className="form-control w-100" defaultValue="name" required {...register('name')} />
                        <br />
                        <p style={{textAlign: 'left'}}>Food Details</p> 
                        <input className="form-control" defaultValue="description" required  {...register('description')} />
                        <br />
                        <p style={{textAlign: 'left'}}>Food Price</p> 
                        <input className="form-control" defaultValue="price" required  {...register('price')} />
                        <br />
                        <p style={{textAlign: 'left'}}>Select Food  Category</p> 
                        <select className="form-control"  required   {...register("categories")}>
                            <option value="breakfast">Break Fast</option>
                            <option value="lunch">Lunch</option>
                            <option value="dinner">Dinner</option>
                        </select>
                        <br />
                        <p style={{textAlign: 'left'}}>Upload Food Image</p> 
                        <input style={{ width: '100%' }} name="photo" className="form-control"   onChange={handleImageUpload} type="file" required />
                        <br />
                        <input className=" btn btn-success w-100" type="submit" />
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>

        </div>
    );
};

export default Foodsadded;