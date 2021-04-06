import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css'

const Admin = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
            </div>
            
        </div>
    );
};

export default Admin;