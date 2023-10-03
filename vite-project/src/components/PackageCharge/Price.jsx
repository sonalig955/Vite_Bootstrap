import React from "react";
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
export const Price = () => {
  return <>
    <Container className='py-5'>


      <Row>

        <Col className="py-5">
          <Card className="py-5">
            <Card.Img className="imageT" variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/pr4.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Basic Package</Card.Title>
              <Card.Text className='text-center'>
                <span>$</span> 200 <br/> &nbsp;
              </Card.Text>
              <Card.Text className="text-center">
                <Button className="rounded-pill" style={{ backgroundColor: '#af90ea' }}>Choose Plan</Button>


              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="py-5">
          <Card className="text-light bg-dark py-5">
            <Card.Img className="imageT" variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/pr5.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body >
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Standard</Card.Title>
              <Card.Text className='text-center'>
                Empower Your Business with Cutting-Edge Mobile App Development Solutions.

              </Card.Text>
              <Card.Text className="text-center">
                <Button className="rounded-pill" style={{ backgroundColor: '#af90ea' }}>Choose Plan</Button>


              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="py-5">
          <Card className="py-5">
            <Card.Img className="imageT" variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/pr6.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>E-commerce Package</Card.Title>
              <Card.Text className='text-center'>
                Dominate the Digital Landscape with Strategic Digital Marketing Solutions.
              </Card.Text>
              <Card.Text className="text-center">
                <Button className="rounded-pill" style={{ backgroundColor: '#af90ea' }}>Choose Plan</Button>


              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>

  </>
}
