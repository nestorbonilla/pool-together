import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Lottie from 'react-lottie';
import animationData from '../assets/pt-logo-lottie.json';

//Importing Modal
import ModalSection from '../components/common/modalSection';

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData
};

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.callModal.bind(this);
    }

    callModal = () => {
        this.refs.child.openModal();
    }
    
    render() {


        return (
            <React.Fragment>
                <section className="section bg-home home-half" id="home" style={{backgroundColor: '#e2e8f0'}}>
                    <div className="bg-overlay"><Lottie
                                    options={defaultOptions}
                                    height={'70%'}
                                    width={'100%'}
                                /></div>
                    
                    <Container>
                        <Row>
                            <Col lg={{size : 8, offset : 2}} className="text-white text-center">
                        
                                <h3 className="home-small-title">A no-loss, audited savings game powered by blockchain technology</h3>
                                
                                <p className="play-shadow margin-l-r-auto">
                                    <Link
                                        onClick={this.callModal}
                                        to="#"
                                        className="play-btn video-play-icon"
                                    >
                                        <i className="mdi mdi-play text-center"></i>
                                    </Link>
                                </p>  
                            </Col>
                            <ModalSection ref="child" channel='youtube' videoId='GHsPSn6A2qE' />
                        </Row>
                    </Container>
                    <div className="wave-effect wave-anim">
                        <div className="waves-shape shape-one">
                            <div className="wave wave-one" style={{ backgroundImage :`url(assets/images/wave-shape/wave1.png)`  }}></div>
                        </div>
                        <div className="waves-shape shape-two">
                            <div className="wave wave-two" style={{ backgroundImage :`url(assets/images/wave-shape/wave2.png)`  }}></div>
                        </div>
                        <div className="waves-shape shape-three">
                            <div className="wave wave-three" style={{ backgroundImage :`url(assets/images/wave-shape/wave3.png)`  }}></div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;