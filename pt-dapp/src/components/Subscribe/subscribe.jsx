import React from 'react';
import { Container, Row, Col, Form, Button } from "reactstrap";

const Subscribe = () => {
    return (
        <React.Fragment>
            <section className="section section-lg bg-get-start">
                <div className="bg-overlay-yellow"></div>
                <Container>
                    <Row>
                        <Col lg={{size :8, offset:2}} className="text-center">
                            <h1 className="get-started-title text-purple">Let's Pool Together</h1>
                            <div className="section-title-border margin-t-20 bg-purple"></div>
                            <p className="section-subtitle font-secondary text-purple text-center padding-t-30">Stay connected to our news and future notifications.</p>
                            <div className="text-center subscribe-form margin-t-30">
                                <Form onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <Button
                                        type="submit"
                                        className="btn btn-custom"
                                    >Join</Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Subscribe;