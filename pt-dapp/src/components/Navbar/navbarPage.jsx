import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Container,
    Collapse,
    Button
} from "reactstrap";
import ScrollspyNav from "./scrollSpy";

//Import Stickey Header
import StickyHeader from 'react-sticky-header';
import '../../../node_modules/react-sticky-header/styles.css';

class NavbarPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home", navheading: "Home" },
                { id: 2 , idnm : "steps", navheading: "Steps" },
                //{ id: 3 , idnm : "steps", navheading: "Steps" },
                // { id: 4 , idnm : "ambassadors", navheading: "Ambassadors" },
                // { id: 5 , idnm : "programming", navheading: "Programming" },
                // { id: 6 , idnm : "supporters", navheading: "Supporters" },
                ],
            isOpenMenu :false
        };
    }

    toggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    }
    
    render() {
        //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
        let TargetId = this.state.navItems.map((item) => {
            return(
                item.idnm
            )
        });

        return (
            <React.Fragment>
                <StickyHeader
                    
                    header = {
                        <Navbar expand="lg" fixed="top" className={ this.props.navClass + " navbar-custom sticky sticky-dark"}>
                            <Container>
                                <NavbarBrand className="logo" href="/">
                                    <img alt="" src="/assets/images/bto-logo.png" className="img-fluid rounded" style={{height: '25px'}}/>
                                </NavbarBrand>
                                
                                

                                <NavbarToggler className="p-0" onClick={this.toggle} ><i className="mdi mdi-menu"></i></NavbarToggler>
        
                                <Collapse id="navbarCollapse" isOpen={this.state.isOpenMenu} navbar>
                                    <ScrollspyNav
                                        scrollTargetIds={TargetId}
                                        activeNavClass="active"
                                        scrollDuration="800"
                                        headerBackground="true"
                                    >
                                        <Nav className="navbar-nav navbar-center" id="mySidenav">
                                            {this.state.navItems.map((item) => (
                                                <NavItem id={item.id} key={item.id} className={item.navheading === "Home" ? "active" : "" }>
                                                    <NavLink href={"#" + item.idnm} > {item.navheading}</NavLink>
                                                </NavItem>
                                            ))} 
                                        </Nav>
                                        </ScrollspyNav>
                                        <div className="nav-button ml-auto">
                                            <Nav className="navbar-right" navbar>
                                                <NavItem id="10">
                                                    <Button type="button" onClick={()=> window.location = 'https://app.pooltogether.com/'} className="btn-custom navbar-btn btn-rounded waves-effect waves-light">Launch App</Button>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    
                                </Collapse>
                            </Container>
                        </Navbar>
                    }
                    stickyOffset = {-100}
                >
                </StickyHeader>
            </React.Fragment>
        );
    }
}

export default NavbarPage;