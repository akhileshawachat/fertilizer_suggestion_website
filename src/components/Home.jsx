// import { useEffect, useState } from "react";
// import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Home(){
  return (
    <>
    <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2023/01/frontiers-environmental-science-recycled-urine-promising-fertilizer.png?ssl=1"
                        alt="First slide" height={700}
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://png.pngtree.com/background/20230823/original/pngtree-d-render-of-agriculture-drone-spraying-fertilizer-on-sugar-cane-farm-picture-image_4788174.jpg"
                        alt="Second slide" height={700}
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://m.economictimes.com/thumb/msid-90926386,width-1600,height-900,resizemode-4,imgsize-42098/rising-fertilizer-costs-are-catching-up-to-rice-farmers-threatening-supplies.jpg"
                        alt="Third slide" height={700}
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>



      <Row>

        <Col  lg={4}>
          <Card style={{ width: '25rem',marginTop:100 ,marginLeft:50}}>
          <Card.Img variant="top" src="https://www.haifa-group.com/sites/default/files/styles/topic_home/public/DL-52128%20Haifa%20Stream%20Podcast%20-%20Web%20Banners%20Chosen%20_0.jpg?itok=2WXSGgkd" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
          </Col> 


          <Col  lg={4}>
          <Card style={{ height:'450', width: '25rem',marginTop:100 ,marginLeft:50 }}>
          <Card.Img variant="top" src="https://www.haifa-group.com/sites/default/files/styles/topic_home/public/article/33831__%20dealer_banners_810_400_A-01.jpg?itok=MmSBvnn1" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
          </Col> 

          <Col lg={4}>
          <Card style={{width: '25rem',marginTop:100,marginLeft:50 }}>
          <Card.Img variant="top" src="https://www.haifa-group.com/sites/default/files/styles/topic_home/public/article/33876_Hifa_Group_Foliar_banners_B-04.png?itok=0EIAV5P4" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          </Card>
          </Col> 




          </Row>
          </>

  );
};
