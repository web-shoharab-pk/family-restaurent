import React from 'react';
import './Header.css'
import logo from '../images/logo3.ico';
import cart from '../icons/shopping-cart.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <header className="headerDiv ">

                <nav class="navbar navbar-expand-lg navbar-light container">
                    <div class="container-fluid">
                        <Link className="navbar-brand mt-3" to="/"> <img style={{ width: '80px' }} src={logo} alt="" /> </Link>
                        <button class="navbar-toggler bg-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse mt-3" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item fs-5 fw-bolder mx-3 ">
                                    <a class="nav-link active px-5 bg-secondary text-light rounded" aria-current="page" href="#/">Home</a>
                                </li>
                                <li class="nav-item fs-5 fw-bolder mx-3">
                                    <a class="nav-link active bg-secondary text-light rounded px-5 " aria-current="page" href="#/">Login</a>
                                </li>
                                <li class="nav-item fs-5 fw-bolder mx-3">
                                    <a class="nav-link active bg-secondary text-light rounded px-5 " aria-current="page" href="#/">Login</a>
                                </li>
                                <li class="nav-item fs-5 fw-bolder  mx-3">
                                    <a class="nav-link active signup px-5 " aria-current="page" href="#/">SignUp</a>
                                </li>
                                <li class="nav-item fs-5 fw-bolder mx-3">
                                    <a class="nav-link active bg-secondary text-light rounded px-5 " aria-current="page" href="/admin">Admin</a>
                                </li>
                            </ul>
                            {/* <form class="d-flex ">
                                <input class="form-control me-2  px-5" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-success " type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container">
                <div className="fw-bold d-flex justify-content-evenly categories ">
                    <Link className="food-categories fs-3" to="/breakfast">Break Fast</Link>
                    <Link className="food-categories fs-3" to="/lunch">Lunch</Link>
                    <Link className="food-categories fs-3" to="/diner">Diner</Link>
                </div>
            </div>

        </div>
    );
};

export default Header;