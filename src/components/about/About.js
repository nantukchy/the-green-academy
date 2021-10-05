import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer, faMapMarkedAlt, faEnvelopeSquare, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const element = <FontAwesomeIcon icon={faHandPointer} />;
    const elementMap = <FontAwesomeIcon icon={faMapMarkedAlt} />;
    const elementEmail = <FontAwesomeIcon icon={faEnvelopeSquare} />;
    const elementMobile = <FontAwesomeIcon icon={faMobileAlt} />;

    return (
        
        <>
            <Card>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' "'}
        We at <mark> Green Design Academy</mark> provide best course to our students. For more disscusion you are invited always. {' "'}
      </p>
      <footer className="blockquote-footer">
       Green Design Team
      </footer>
    </blockquote>
  </Card.Body>
</Card>
            <section className="contact bg-light my-5">
                <div className="container bg-success my-5">
                    <h2 class="text-center fs-1 mt-5">Contact With <span class="text-white fw-bold">Us</span></h2>
                    <div class="row shadow-lg bg- warning d-flex justify-content-center py-5 my-5">
                    <div class="col-lg-6 d-flex align-items-center justify-content-center">
              <div class="">

                <div class="address">
                 <h4>Location:{elementMap}</h4>
                  <p>High Street, Chittagong , Bangladesh</p>
                  
                </div>
  
                <div class="email">
                <h4>Email:{ elementEmail}</h4>
                  <p>bdnantu8@gmail.com</p>
                </div>
  
                <div class="phone">
                <h4>Call:{ elementMobile}</h4>
                  <p>+88-01919880736</p>
                </div>
              </div>
  
            </div>
                    <div className="col-lg-6 mt-5 mt-lg-0 d-flex align-items-center justify-content-center">
        <Form className="border border-1 shadow-sm p-3 mb-5 bg-body rounded">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        {element} Submit
        </Button>
            </Form>
            
            </div>
 

                    </div>

                </div>
  
            </section>
 
            </>
    );
};

export default About;