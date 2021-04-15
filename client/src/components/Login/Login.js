import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
import './Login.css';
import fblogo from '../icons/facebook.png';
import googlelogo from '../icons/google.png'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app"
import { DetailsContext } from '../../App';
require("firebase/auth");


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    // const { register, handleSubmit, errors } = useForm();
    // const onSubmit = data => console.log(data);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const { setLoggedUser } = useContext(DetailsContext)

    const googleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user; 
                setLoggedUser(user);
                history.replace(from);
                // ...
            }).catch((error) => {
                console.log(error)
            });
    }

    const fbSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setLoggedUser(user);
                history.replace(from);
            })
            .catch((error) => {
                // Handle Errors here.
                console.log(error)
            }); 
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-5">
                    <button className="btn text-light btn-danger px-5"><Link className="text-light fw-bold fs-4" to="/"> Back Home</Link></button>
                </div>
                <div className="col-md-4 loginform rounded mt-5">
                    {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" className="form-control" defaultValue="test" {...register("example")} required />
                        <br />
                        <input className="form-control" name="password" defaultValue="password" {...register("name")} required />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className="form-control fw-bold bg-success text-light" type="submit" value="Login" />
                    </form> */}


                    <div className="mt-5">
                        <h3 className="text-light">Login with <br /> <hr /> facebook OR google</h3>
                        <div className="mt-5">
                            <button onClick={googleSignIn} className="googleloginbtn fw-bold py-1"><img className="me-5" src={googlelogo} alt="google logo" /> Google</button>
                        </div>
                        <div className="mt-5">
                            <button onClick={fbSignIn} className="fbloginbtn fw-bold "><img className="me-5" src={fblogo} alt="facebook logo" /> facebook</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
};

export default Login;