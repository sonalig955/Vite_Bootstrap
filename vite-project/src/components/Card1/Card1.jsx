import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Card1.css'

export const Card1 = ({mode}) => {
    return (
        <>
        <Container  className={`text-center d-flex justify-content-center ${mode}`} style={{padding:'8%',}} >
            <Row >
                
                <h1 className="text-center d-flex justify-content-center align-items-center fs-1 ">Web Development</h1>
                <p className="text-center fs-3">Unlock the Power of Web Presence with our <br/>
                Professional Website Designing Service! Elevate Your Online Presence with
                 Stunning Website Designs.</p>
                
            </Row>
        </Container>
           
        </>
    )
}