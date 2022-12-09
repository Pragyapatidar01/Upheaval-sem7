import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "../App.css";
import {signOut} from "firebase/auth";
import {auth} from "../firebase-config";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import Login from "../Pages/Login";


function NavbarComp() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    console.log("signed Out");
    navigate('/');
  
  }

    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          left: "0",
          top: "0",
          zIndex: "1",
        }}
      >
        <Navbar className="navouter" bg="dark" variant={"dark"} expand="lg">
          <Container className="navall" fluid>
            <Navbar.Brand className="myhead" href="#">
              Upheaval
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {/* <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
                {/* <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
              </Nav>
              {console.log(auth)}
              {auth.currentUser==null? (
                console.log("")
              ) : (
                <Button className="custom-btn" variant="outline-light" onClick={logout}>
                logout
              </Button>
              )}

              
            
              {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default NavbarComp