import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    
    <>
  
      <div className="banner">
    
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-8">
            <h1 className="title">
              The <br /> Green Design Academy
            </h1>
            <p className="text-white text-center mt-3">
            This landscaping online course has been designed in consultation with the landscaping industry and teaches you the skills that you need to succeed quickly and conveniently
            </p>
            <h3 className="text-white text-center mt-3"> Learn With Passion ! </h3>
            <Button variant="success">About Us</Button>
          </div>
          <div className="col-md-4"></div>
        </div>
        </div>      
      </div>
      
      </>
  );
};

export default Banner;