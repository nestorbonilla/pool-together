import React, { Component } from 'react';
import NavbarPage from "../components/Navbar/navbarPage";
import Section from './section';
import Steps from '../components/Steps/steps';
import Subscribe from '../components/Subscribe/subscribe';
import Footer from '../components/Footer/footer';

class Index extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      navClass : ""
    };
  }

  render() {
    return (
      <React.Fragment>

        <NavbarPage navClass={this.state.navClass}/>

        <Section/>
        
        <Steps/>

        <Subscribe/>

        <Footer/>

      </React.Fragment>
    );
  }
}

export default Index;