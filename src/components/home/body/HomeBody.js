import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import courseImg1 from '../../../assests/home-img-2.jpeg';
import courseImg2 from '../../../assests/home-img-3.jpeg';
import courseImg3 from '../../../assests/home-img-5.jpeg';
import courseImg4 from '../../../assests/home-img-1.jpeg';
import webinarImage from '../../../assests/webinarImage.jpeg';

const HomeBody = () => {
    const courseImgStyle = {
            display:'block',
            objectFit: 'scale down',
            borderRadius: 5,
            width: '40vw',
            height: '60vh'      
    }
    return (
        <div>
            <h1 className="text-success">Our Courses</h1>
            <p>Combine your love of nature with your creative skills and learn to design beautiful outdoor spaces with Penn Foster Career School's Landscaping courses. Our landscaping classes will cover everything from pest management and how to choose plants for your landscape to the proper tools and techniques to create and maintain an attractive and sustainable landscape.</p>
            <Row xs={1} md={2} className="g-4 my-3 mx-3">
  
    <Col>
      <Card className="border-success border-2 rounded shadow p-3 mb-5 bg-body rounded">
        <Card.Img variant="top" src={courseImg1} style={courseImgStyle } />
        <Card.Body>
          <Card.Title className="text-success">Horticulture</Card.Title>
                            <Card.Text>
                            <p>40 Lessons: 4 hours per week</p>
                                <h5 className="text-success"> $680</h5>
          Training in horticulture, garden design and landscaping. While still covering design and drawing a plan; this course covers less design, and more horticulture and garden construction, than the certificate in garden design.
                  </Card.Text>
                  <Button variant="outline-success">Enroll Now</Button>{' '}
        </Card.Body>
                    </Card>
                    <Card className="border-success border-2 rounded shadow p-3 mb-5 bg-body rounded">
                        <Card.Img variant="top" src={ courseImg2} style={courseImgStyle } />
        <Card.Body>
          <Card.Title className="text-success">Garden Design</Card.Title>
                            <Card.Text>
                                <p>30 Lessons: 5 hours per week</p>
                                <h5 className="text-success"> $344</h5>
                                
          Garden Design exceptionally solid training for garden designers. Learn to survey a site, deal with clients, choose and arrange soft and hard landscape materials, and create gardens that are both aesthetic and practical.
                  </Card.Text>
                  <Button variant="outline-success">Enroll Now</Button>{' '}
        </Card.Body>
                    </Card>
                    
                </Col>
                <Col>
      <Card className="border-success border-2 rounded shadow p-3 mb-5 bg-body rounded">
        <Card.Img variant="top" src={ courseImg3} style={courseImgStyle } />
        <Card.Body>
          <Card.Title className="text-success">Landscape Construction</Card.Title>
                            <Card.Text>
                            <p>20 Lessons: 3 hours per week</p>
                                <h5 className="text-success"> $230</h5>
          Learn basic landscape construction skills. Understand landscape tools and uses, how to measure sites, earthworks and construction of surfaces and enclosures. Train for a job, career or professional development in landscaping.
                  </Card.Text>
                  <Button variant="outline-success">Enroll Now</Button>{' '}
        </Card.Body>
                    </Card>
                    <Card className="border-success border-2 rounded shadow p-3 mb-5 bg-body rounded">
        <Card.Img variant="top" src={ courseImg4} style={courseImgStyle } />
        <Card.Body>
          <Card.Title className="text-success">Yard Design</Card.Title>
                            <Card.Text>
                            <p>50 Lessons: 6 hours per week</p>
                                <h5 className="text-success"> $800</h5>
          Learn to design and create cottage gardens. This is a solid foundation course for landscapers, horticulturists, gardeners or anyone passionate about cottage gardens. Add to your garden design skills.
                  </Card.Text>
                  <Button variant="outline-success">Enroll Now</Button>{' '}
        </Card.Body>
                    </Card>
                    
    </Col>
            </Row>
            <article className="container bg-white border border-success border-2 shadow-lg mt-1 rounded-3">
  <h2 className="text-center fs-1 mt-5">Don't miss out on our next <span className="text-success">live webinar!</span></h2>

        <div className="row align-items-center justify-content-center mb-0 mt-3">                  
                     
            <div className="col-lg-6 mb-3">
                <div className="single-blog d-sm-flex">
                            <div className="blog-content mx-1 my-1">
                                <img src={ webinarImage } alt="" />
                                <h2>ELA Webinar Series</h2>
                                <h5><mark>Speakers:</mark> Jeffrey Scott, Jeffrey Scott, Chris Vedrani Cory Maker,Ditch Witch, Chapman Hancock, Ditchon Witch</h5>
                                <h5><mark>10th of October</mark>, 2021 Time: 10.00 am via ZOOM</h5>
                        <p className="text">This webinar series is geared to landscape professionals, gardeners, and anyone who stewards the land. The series is presented through collaboration of the Ecological Landscape Alliance (ELA), the Chesapeake Conservation Landscaping Council (CCLC), ReScape, the American Public Gardens Association (APGA) and the Deep Roots Kansas City. Known regionally and nationally for their quality education programs, these organizations are working cooperatively to share knowledge and encourage conversations with landscape professionals and gardeners from around the country and the globe.</p>
                        <a className="btn btn-success mb-1" target="blank" href="https://www.landscapemanagement.net/webinars/">Apply Now</a>
                    </div>
                </div>
            </div>
        </div>

 </article>   
        </div>
    );
};

export default HomeBody;