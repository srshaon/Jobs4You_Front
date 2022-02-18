
import React from 'react';
import { Accordion, Container, Row, Col } from 'react-bootstrap';
import FaqCustom from '../FaqCustom/FaqCustom';

const Faq = () => {
    return (
        <div style={{backgroundColor: 'white', marginBottom: '50px'}}>
        <Container>
            <Row>
                <h2 className="text-center mt-5 mb-4 py-5">Frequently Asked Questions</h2>

                <Col xs={12} md={8} className="mx-auto">
                    <Accordion className="shadow-lg" defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                            
                            <span className="fw-bold">How do I start with this website?</span>
                                            
                            </Accordion.Header>
                            <Accordion.Body>
                            To proceed with Jobs4You, please create an account with jobseeker or recruiter profile.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><span className="fw-bold">Can I get Training for jobs?</span></Accordion.Header>
                            <Accordion.Body>
                            Definitely, we help the jobseekers learning relevent skills check thoroughly our site.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                            
                            <span className="fw-bold">Are the services free?</span>
                                            
                            </Accordion.Header>
                            <Accordion.Body>
                            Right now, we are in our beta version. So all the services are free for now. But soon we will move on to subscription model.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                            
                            <span style={{lineHeight: '30px'}} className="fw-bold">Can I know how many applicants applied for a specific job as a candidate?</span>
                                            
                            </Accordion.Header>
                            <Accordion.Body>
                            Of course. We'll add the information on jobposts. But you wouldb't get the candidate list as a jobseeker.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <h3 className="text-center mt-5 pt-4 mb-4">Anything else need to know? Post below :v</h3>
            <FaqCustom />
        </Container>
    </div>
    )
}

export default Faq;