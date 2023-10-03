import React from "react";
import Accordion from 'react-bootstrap/Accordion';

export const AccordiansWWD=()=>{
    return<>
    <Accordion defaultActiveKey="0"  className="my-5">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Define Goals and Requirements</Accordion.Header>
                <Accordion.Body>
                At Vdig Tech, we Understand the purpose of the website, its target audience, and the specific goals it needs to achieve. Determine the features, functionality, and content that the website will require for ecommerce website design services.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Research and Planning</Accordion.Header>
                <Accordion.Body>

                Conduct market research to gather insights about the target audience, competitors, and industry trends. Create a sitemap to outline the structure and hierarchy of the website’s pages. Consider the user journey and how visitors will navigate through the site.
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>User Experience (UX) Design</Accordion.Header>
                <Accordion.Body>
                Focus on designing a user-friendly experience by creating wireframes or prototypes. This involves creating the layout, structure, and functionality of each page, ensuring intuitive navigation and easy access to information.
                </Accordion.Body>
            </Accordion.Item>





            <Accordion.Item eventKey="3">
                <Accordion.Header>Testing and Optimization</Accordion.Header>
                <Accordion.Body>
                Conduct thorough testing to identify and fix any issues, such as broken links, browser compatibility problems, or usability concerns. Optimize the website’s performance, including page load times and mobile responsiveness.
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="4">
                <Accordion.Header>Launch and Deployment</Accordion.Header>
                <Accordion.Body>
                Deploy the website on a web hosting platform or server. Ensure proper domain and hosting setup, configure security measures (such as SSL certificates), and monitor the website’s performance.
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
                <Accordion.Header>Maintenance and Updates</Accordion.Header>
                <Accordion.Body>
                Regularly update and maintain the website by adding new content, improving functionality, and addressing any technical issues. Monitor analytics to gain insights into user behavior and make data-driven improvements.
                </Accordion.Body>
            </Accordion.Item>





        </Accordion>
    </>
}