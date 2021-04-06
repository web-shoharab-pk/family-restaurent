import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div class="sidenav">
                <Link to="/">Home</Link>
                <Link to="#services">Services</Link>
                <Link to="#clients">Clients</Link>
                <Link to="#contact">Contact</Link>
            </div>

            <div class="main">
                <h1>Admin</h1>
            </div>
        </div>
    );
};

export default Sidebar;