import React from "react";
import Accordion from 'react-bootstrap/Accordion';


export const Accordians = (mode) => {
    return <>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
                <Accordion.Header>Complete website management</Accordion.Header>
                <Accordion.Body>
                Complete website management encompasses comprehensive services to handle all aspects of a website’s operation and maintenance. It includes activities such as website design and development, content updates, security monitoring, performance optimization, SEO, backups and restoration, domain and hosting management, and ongoing support. This holistic approach ensures a well-maintained, secure, and high-performing website, allowing businesses to focus on their core operations while leaving the technical aspects to the experts, and website maintenance costs
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Security and protection</Accordion.Header>
                <Accordion.Body>

                    Security and protection of a website are crucial to safeguard against cyber threats and unauthorized access. We monitor the website 24*7 to counter all kinds of threats to maintain the website safe.
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>Performance optimization</Accordion.Header>
                <Accordion.Body>
                    Performance optimization refers to the process of improving a website’s speed, responsiveness, and overall performance to
                    provide a better user experience. By implementing performance optimization techniques, websites can deliver a faster, smoother, and more engaging user experience, which can lead to improved search engine rankings,
                    increased user satisfaction, and higher conversion rates.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    </>
}

export default Accordians;