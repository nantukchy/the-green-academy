import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from './logo.png';

const MenuBar = () => {
  const menuStyle = {
    textDecoration: 'none',
    color: 'black',
    fontSize:'20px'
  }
    return (
        <>
        <div>
            <Navbar bg="success" variant="">
                <Container className="mx-auto mt-0 p-0 bg-success">
      <Navbar.Brand className="" to="#home">
        <img
          alt=""
          src={logoImg}
          width="40"
          height="50"
          className=""
        />Green Design Academy
      </Navbar.Brand>
              <Nav className="me-3">
              <Link style={ menuStyle} className="ms-5" to='/home'>Home</Link>
            <Link style={ menuStyle} className="ms-5" to='/users'>Courses</Link>
            <Link style={ menuStyle} className="ms-5" to='/about'>Contact</Link>
                <Link style={ menuStyle} className="ms-5" to='/blog'>Blog</Link>
    </Nav>
        
    </Container>
  </Navbar>
            </div>

            </>
    );
};

export default MenuBar;