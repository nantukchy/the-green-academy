import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Use = (props) => {
    const { name, title, details, fee, lessons} = (props.user)
    const userStyle = {
        border: '1px solid green',
        margin: '3px',
        paddingBottom:'10px',
        backgroundColor: 'white',
        borderRadius: '12px',
        color:'black'
    }
    const btnStyle = {
        border: '1px solid gray',
        backgroundColor: 'green',
        borderRadius: '4px',
        padding: '8px 8px',
        marginBottom: '8px',
        textDecoration: 'none',
        fontSize: '18px',
        color:'black'
        
    }
    return (
        
        <div style={userStyle} className="m-3">
             
            <h1 className="text-success">{title}</h1>
            <p>{details}</p>
            <h4>Instructor: {name}</h4>
            <p className="text-warning">Fees:${fee}</p>
            <p>Total online lessons:{lessons}</p>
            <Link style={btnStyle} to={`/user/${name}`}>Details</Link>
            </div>
    );
};

export default Use;