import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Accordians from "../DevlopmentService/Accordians";


export const Expertise=()=>{
    return<>
    <Container className="my-5">
        <Row>
        <Col md="6" >
                    <h1>Expertise</h1>

                    <p style={{ lineHeight: '29px' }}>Here is a list of our expertisation in developing websites for any platform. We follow a unique strategy to cover all sections of our client’s requirements. 
                    Our expertise generally includes;</p>

                        <Accordians     />
                        
                        

                </Col>
                <Col md='6'  >
                <Image className="imageT" src="https://vdigtech.com/wp-content/uploads/2023/09/cr9e.png"  style={{width:'100%'}}/>
                <Image className="imageT" src="https://vdigtech.com/wp-content/uploads/2023/09/sh5.png" style={{width:"13%"}}/>

                </Col>
        </Row>
    </Container>
    </>
}