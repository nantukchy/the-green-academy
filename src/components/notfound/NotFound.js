import React from 'react';
import errorImg from '../../assests/error.png';
import logoImg from '../../assests/logo.png';

const NotFound = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
            <h3>Sorry the requested URL doesn't exist !!!!!!!</h3>
            <img src={logoImg} alt="" />
        </div>
    );
};

export default NotFound;