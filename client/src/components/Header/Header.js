import React, { useContext } from 'react';
import './Header.css'
import logo from '../images/logo3.ico';
import cart from '../icons/shopping-cart.png'
import { Link } from 'react-router-dom';
import { DetailsContext } from '../../App';
import firebase from "firebase/app"


const Header = () => {
    const { loggedUser, setLoggedUser} = useContext(DetailsContext);
    // const {displayName, email, photoURL} = {loggedUser};

    const handleSignout = () => {

        firebase.auth().signOut().then(() => {
             setLoggedUser("")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <header className="headerDiv ">

                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className="container-fluid">
                        <Link className="navbar-brand mt-3" to="/"> <img style={{ width: '80px' }} src={logo} alt="" /> </Link>
                        <button className="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item fs-5 fw-bolder mt-3 mx-5 ">
                                    <Link className="nav-link active px-5 bg-secondary text-light rounded" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item fs-5 fw-bolder mt-3 mx-5">
                                    <Link className="nav-link active bg-secondary text-light rounded px-5 " aria-current="page" to="/orderedfood">
                                        <img style={{ width: '25px' }} src={cart} alt="" />
                                    </Link>
                                </li>

                                {
                                    loggedUser.email ? <div className=" userImag d-flex justify-content-center  mx-3">
                                        <img className="mx-3" src={loggedUser.photoURL} alt="" />
                                        <li className="nav-item fs-5 fw-bolder mx-5">
                                            <button onClick={handleSignout} className="nav-link active signup mt-3 px-5 " aria-current="page" to="/login">LogOut</button>
                                        </li>
                                    </div> :
                                        <li className="nav-item fs-5 fw-bolder  mt-3 mx-5">
                                            <Link className="nav-link active signup px-5 " aria-current="page" to="/login">SignUp</Link>
                                        </li>
                                }


                                <li className="nav-item fs-5 fw-bolder mt-3 mx-5">
                                    <Link className="nav-link active bg-secondary text-light rounded px-5 " aria-current="page" to="/admin">Admin</Link>
                                </li>
                            </ul>
                             
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container">
                <div className="fw-bold d-flex justify-content-evenly categories ">
                    <Link className="food-categories fs-3" to="/breakfast">Break Fast</Link>
                    <Link className="food-categories fs-3" to="/lunch">Lunch</Link>
                    <Link className="food-categories fs-3" to="/diner">Dinner</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;