// Challenge: Scaffold out the Navbar component
// Use reactstrap to create the Navbar
// Brand should say: ToDo
//2 links: Lists, Login

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {
    //    variable    function
    const[ isOpen, changeIsOpen ] = useState(false);

    const toggleNavbarMenu = () => changeIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light>
                <NavbarBrand>ToDo</NavbarBrand>
                <NavbarToggler onClick={toggleNavbarMenu}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {
                            props.isLoggedIn    
                            ? (
                                <>
                                    <NavItem>
                                        <Link to='/mylist'>My Lists</Link>
                                    </NavItem>
                                    <NavItem>
                                        <p>Logout</p>
                                    </NavItem>
                                </>
                            )
                            : (
                                <>
                                    <NavItem>
                                        <Link to='/login'>Login</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to='/register'>Register</Link>
                                    </NavItem>
                                </>
                            )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;