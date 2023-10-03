import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { BsTelephone } from 'react-icons/bs'
import {CiLocationArrow1} from 'react-icons/ci'
import {CiMail} from 'react-icons/ci'

export const Footers = () => {
    return <>
       
            <Row  style={{ backgroundColor: "#232227" }}>
                <Col className="px-5 py-5 text-white
                " md="4" >
                    <Image src="https://vdigtech.com/wp-content/uploads/2023/09/COM-2.png" style={{ width: '74%' }} />
                    <br />

                    <p style={{ color: 'white' }} className="px-5"><CiMail/> info@vdigtech.com</p>

                    <p style={{ color: 'white' }} className="px-5"> <i><BsTelephone /></i>+91 9836436734</p>
                </Col>

                <Col md="3" className="text-white px-5" style={{marginTop:'45px'}}>
                    <p className="fs-3 ">Services</p>
                    <ul style={{ listStyle: 'none', lineHeight: '33px' }} className="px-2">
                        <li><CiLocationArrow1/>Website Development</li>
                        <li><CiLocationArrow1/>App Development</li>
                        <li><CiLocationArrow1/>Website Maintenance</li>
                        <li><CiLocationArrow1/>Digital Marketing</li>
                        <li><CiLocationArrow1/>Graphic Design</li>

                    </ul>
                </Col>

                <Col className="text-white my-5 px-5" md="5" style={{marginTop:'45px'}}>
                    <p className="fs-3">Products</p>
                    <ul style={{ listStyle: 'none', lineHeight: '33px' }}>
                        <li><CiLocationArrow1/>Google Workspace</li>
                           <li><CiLocationArrow1/> Azure Account</li>
                           <li><CiLocationArrow1/> AWS Account</li>
                            <li><CiLocationArrow1/>Canva PRO</li>
                            <li><CiLocationArrow1/>RDP</li>
                        
                    </ul>
                </Col>
            </Row>
        
    </>
}