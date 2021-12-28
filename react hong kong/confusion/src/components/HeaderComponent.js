import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container" >
                        <div className='row'>
                            <NavbarToggler onClick={this.toggleNav} className='col-3 col-md-0' />
                            <NavbarBrand className="mr-auto col-5 col-md-1 mt-0" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <Collapse className='col-10' isOpen={this.state.isNavOpen} navbar>
                                <div className=' row'>
                                    <Nav navbar >
                                        <NavItem>
                                            <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg col-1 col-md-3"></span> Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link " to='/aboutus'><span className="fa fa-info fa-lg col-1 col-md-0"></span> About Us</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-sm col-1 col-md-3"></span> Menu</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-sm col-1 col-md-2"></span> Contact Us</NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>

                            </Collapse>
                        </div>
                    </div>
                </Navbar >
                <div className='jumbotron'>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Header;