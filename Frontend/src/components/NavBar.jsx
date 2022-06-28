import React from 'react'
import{Navbar,Nav,Container} from 'react-bootstrap'
import{LinkContainer}from 'react-router-bootstrap'
import{GiFoodTruck}from'react-icons/gi'

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" varient="dark" expands="lg">
        <Container fluid>
            <h6>
                <GiFoodTruck className="text-dark "/>Foodie</h6>
            <Nav className='ms-auto'>
                <LinkContainer to = "/" activeClassName>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Admin" activeClassName>
                    <Nav.Link>Admin</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Accounts" activeClassName>
                    <Nav.Link>Login/Register</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Menu" activeClassName>
                    <Nav.Link>Menu</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/about" activeClassName>
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to = "/Contact" activeClassName>
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
