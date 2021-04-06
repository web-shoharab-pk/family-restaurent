import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className="sidenav">
                <Link to="/">Back Home</Link> 
                <Link to="/addfoods">Food Add</Link>
                <Link to="/managefood">Food Manage</Link>
            </div>
 
        </div>
    );
};

export default Sidebar;