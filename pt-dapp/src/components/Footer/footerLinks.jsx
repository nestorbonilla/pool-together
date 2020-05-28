import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class FooterLinks extends Component {
    state = {
        socials : [
            { id: 1, icon : "mdi mdi-facebook", link : "https://www.facebook.com/PoolTogetherES" },
            { id: 2, icon : "mdi mdi-twitter", link : "https://twitter.com/PoolTogether_" },
            { id: 3, icon : "mdi mdi-instagram", link : "https://www.instagram.com/pooltogether_com/" }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="footer-alt">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="float-left pull-none">
                                    <p className="copy-rights text-muted mb-3 mb-sm-0">2020© Pool Together. Made by <a href="https://github.com/nestorbonilla" style={{color: '#FFCF00'}}>Nestor Bonilla</a>.</p>
                                </div>
                                <div className="float-right pull-none ">
                                    <ul className="list-inline social m-0">
                                        {
                                            this.state.socials.map((social) =>
                                                <li key={social.id} className="list-inline-item"><Link to={social.link} className="social-icon"><i className={social.icon}></i></Link></li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="clearfix"></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default FooterLinks;