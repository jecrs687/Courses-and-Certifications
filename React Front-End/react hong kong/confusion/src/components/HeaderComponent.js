import React, { Component } from 'react'
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, Input, FormGroup, Form, Label
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.state.pass.value + "Remember: " + this.remember.checked)
        event.preventDefault()
    }
    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className="container" >
                        <div className='row'>
                            <NavbarToggler onClick={this.toggleNav} className='col-3 col-md-0' />
                            <NavbarBrand className="mr-auto col-5 col-md-1 mt-0" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                            <Collapse className='col-9' isOpen={this.state.isNavOpen} navbar>
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
                            <Nav className="mr-md-3 ml-auto col mt-1" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span class="fa fa-sign-in fa-lg" />
                                        Login
                                    </Button>
                                </NavItem>
                            </Nav>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlForm="username">
                                    Username
                                </Label>
                                <Input type="text" id="username" name="username" innerRef={
                                    (input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlForm="password">
                                    Password
                                </Label>
                                <Input type="password" id="password" name="password" innerRef={
                                    (input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label chack>
                                    <Input type="checkbox" name="remember" innerRef={
                                        (input) => this.checked = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </ >
        );
    }
}

export default Header;