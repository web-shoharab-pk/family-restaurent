import React from 'react';
import './Header.css'
import logo from '../images/logo3.ico'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="headerDiv ">
                <nav class="navbar navbar-expand-lg navbar-light    w-100 container">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link class="navbar-brand mt-3" to="/"> <img style={{ width: '50px' }} src={logo} alt="" /> </Link>
                            <div className="">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-light ">
                                    <li class="nav-item mx-5 fw-bold">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item mx-5 fw-bold">
                                        <Link class="nav-link active" to="/">Cart</Link>
                                    </li>
                                    <li class="nav-item mx-5 fw-bold">
                                        <Link class="nav-link active" to="/admin">Admin</Link>
                                    </li>
                                    <li class="nav-item mx-5 fw-bold">
                                        <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
                                    </li>
                                    <li class="nav-item mx-5 fw-bold">
                                        <Link class="nav-link active" to="/">Signup</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className=" d-flex justify-content-around align-items-center container">
                    <form class="d-flex justify-content-around searchBar w-50 px-3 py-1 mt-5">
                        <input class="searchField w-75 p-1" type="search" placeholder="Search" aria-label="Search" />
                        <button class=" searchBtn w-25 p-1" type="submit">Search</button>
                    </form>
                </div>


            </header>
        </div>
    );
};

export default Header;