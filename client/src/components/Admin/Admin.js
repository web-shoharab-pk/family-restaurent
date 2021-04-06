import React from 'react'; 
import Sidebar from '../Sidebar/Sidebar';
import './Admin.css'

const Admin = () => {
    return (
        <div>
            <div className="row">
                <div style={{ height: '100vh ', backgroundColor: 'black'}} className="col-md-3 ">
                    <Sidebar  />
                    
                </div>
                <div className="col-md-4">
                    
                </div>
                <div className="col-md-4">
                    
                </div>
            </div>
            
        </div>
    );
};

export default Admin;