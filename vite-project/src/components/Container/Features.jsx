import React from "react";
// import { Container } from "react-bootstrap";
import './Features.css'
import {AiOutlineCheck} from "react-icons/ai";
export const Features = ({mode}) => {
    return <>
        <div style={{ padding:'2%' }} className={`my-5 mb-5 ${mode}`}>
            <ul className="d-flex justify-content-evenly fs-5 " style={{listStyle:'none'}}>
                <li><AiOutlineCheck />Creative People</li>
                    <li><AiOutlineCheck />Good Reviews</li>
                    <li><AiOutlineCheck />Awesome Design</li>
                    <li><AiOutlineCheck />Fast Delivery</li>
            </ul>

        </div>




    </>

}