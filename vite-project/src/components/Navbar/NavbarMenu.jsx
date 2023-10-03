import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { BsTelephone } from 'react-icons/bs'
import { CiDark, CiLight } from 'react-icons/ci';


export const NavbarMenu = ({icons, mode, handleChange}) => {

  return <>
    <Navbar expand="lg">
      <Container fluid className={`p-3 ${mode}`} >
        <Navbar.Brand href="#">
          <Image src="https://vdigtech.com/wp-content/uploads/2023/09/COM-2.png" style={{ width: '11rem' }}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 justify-content-center container-fluid"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={`px-4 ${mode}`}>Home</Nav.Link>
            <Nav.Link href="#action2" className={`px-3 ${mode}`}>About Us</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown" className={`px-2 ${mode}`}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products" id="navbarScrollingDropdown" className='px-2'>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1" className={`${mode}`}>Contact Us</Nav.Link>
          </Nav>
          <i><BsTelephone /></i>
          <Nav.Link href="#action1">+91982929829

          </Nav.Link>

          <Nav.Item className='px-3'>
            {icons==="dark" && (
              <CiLight className='dartLight'
                size='35px'
                onClick={() => handleChange()} />
            ) }

            {icons==="light" && (<CiDark className='dartLight'
                size='35px'
                onClick={() => handleChange()} />)}

          </Nav.Item>


          <Button variant="outline-success" className='rounded-pill col-2 me-2 '>Join Now</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
} 