import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Image} from 'react-bootstrap';


export const ExtraCard = () => {
  return <>
    <Container className='py-5'>


      <Row>

        <Col >
          <Card >
            <Card.Img className='imageT' variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/se1.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body >
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Web Development</Card.Title>
              <Card.Text className='text-center'>
                Transform Your Ideas into a Captivating Digital Experience with Expert
                Website Development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img className='imageT' variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/se2.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>App Development</Card.Title>
              <Card.Text className='text-center'>
                Empower Your Business with Cutting-Edge Mobile App Development Solutions.<br />&nbsp;
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          
        <Col>
          <Card>
            
            <Card.Img className='imageT' variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/se3.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Digital Marketing</Card.Title>
              <Card.Text className='text-center'>
                Drive Growth and Dominate the Digital Landscape with Strategic Digital Marketing Solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      <Row>
        <Col>
        <Image className='imageT' src="https://vdigtech.com/wp-content/uploads/2023/09/sh13.png" style={{width:'10%', float:'right'}}/>
        </Col>
      
      </Row>



      <Row>

        <Col className='my-4'>
          <Card>
            <Card.Img className='imageT' variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/se4.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Website Maintenance</Card.Title>
              <Card.Text className='text-center'>
                Keep Your Website Running Smoothly and Secure with Hassle-Free Website Maintenance Services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className='my-4'>
          <Card style={{ height: '302px' }}>
            <Card.Img className='imageT' variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/se5.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Graphic Designing</Card.Title>
              <Card.Text className='text-center'>
                Unleash Creativity and Captivate Audiences with Exceptional Graphic Design Solutions.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        

        <Col className='my-4'>
          <Card>
            <Card.Img className='imageT' variant="top" src="https://vdigtech.com/wp-content/uploads/2023/09/se5.png" style={{ width: '117px', marginLeft: '8rem', marginTop: '1rem' }} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-center fs-2 py-2'>Domain & Hosting</Card.Title>
              <Card.Text className='text-center'>
                Our domain and hosting services are the cosmic tools that empower you to shape your own corner of the online cosmos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>



    </Container>
  </>
}