
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormExample from "./FormExample";
import { AccordiansWWD } from "./AccordiansWWD";


export const WWD = () => {
    return <>
        <Container >
           
                <Row>
                <Col md="12">
                    <h1 className="text-center">What we do</h1>
                    <p className="text-center fs-4">As a website designer we provide affordable website design services to our clients all over the world with best services. Our services include; small business website design services

                    </p>
                    </Col>
                </Row>

                <Row className="py-5">
                    <Col md='6'>
                    <FormExample/>
                   
                    </Col>
                    <Col md='6'>
                    <AccordiansWWD/>
                    </Col>
                </Row>
            

        </Container>
    </>
}