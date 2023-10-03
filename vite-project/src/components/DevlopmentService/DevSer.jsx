import React from "react";
import { Accordians } from "./Accordians";
import { Col, Image, Container, Row } from "react-bootstrap";
import { Price } from "../PackageCharge/Price";

export const DevSer = () => {
    return <>
        <Container>
            <Row>
                <Col md="6" >
                    <h1>Website Designing <br />or Development Services</h1>

                    <p style={{ lineHeight: '29px' }}>If you’re looking for website designing services, there are several<br />
                        options available to you.Here are a few avenues you can explore:</p>

                        <Accordians/>

                </Col>
                <Col md='6'  >
                <Image className="imageT" src="https://vdigtech.com/wp-content/uploads/2023/09/cr4.png"  style={{width:'100%'}}/>

                </Col>
            </Row>

            {/* <Row>
                <Col className="col-6" style={{border:'2px solid black'}}>
                
                </Col>
                
                
            </Row> */}
            <Row>
                <Price/>
            </Row>

        </Container>

    </>
}

// export default DevSer;