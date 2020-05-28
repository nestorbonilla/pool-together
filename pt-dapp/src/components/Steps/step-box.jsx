import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class StepBox extends Component {
    render() {
        return (
            <React.Fragment>
                <Col lg="3" sm="6">
                    <div className="blog-box margin-t-50">
                        <img src={this.props.programming.image} className="img-fluid rounded" alt=""/>
                        <div>
                            <h4 className="mt-3"><Link to={this.props.programming.link} className="blog-title"> {this.props.programming.title} </Link></h4>
                            <p className="text-muted">{this.props.programming.description.substring(0,90)+'...'}</p>
                            <div className="mt-3">
                                <a href={this.props.programming.link} className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </Col>
            </React.Fragment>
        );
    }
}

export default StepBox;