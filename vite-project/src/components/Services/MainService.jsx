import React from "react";
import { Container, Row } from "react-bootstrap";
import { ExtraCard } from "./ExtraCard";
import {Image} from "react-bootstrap";


export const MainService=()=>{
    return<>
    <Container className="py-5" >
        <Row>
            <Image src="https://vdigtech.com/wp-content/uploads/2023/09/sh2.png" className="imageT" style={{width:'9%'}}/>
        <h1 className="text-center d-flex justify-content-center align-items-center fs-1 ">Our Services</h1>
                <p className="text-center fs-3">Comprehensive Website Services to Ignite Your Online Success. Empower<br/>
               Your Business with Powerful Online Services from our Website.</p>
               <ExtraCard />
        </Row>
    </Container>
    
               
                
               
               

             

               
               
           
       
    
    

    
    
    </>

}