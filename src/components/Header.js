import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import logo from "./../images/logo-wecare.svg";

const Header = () => {
  return (
    <>
      <div className="Header fixed-top">
        <Navbar expand="lg" className="Header-navbar">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                height="23"
                className="d-inline-block align-top Header-logo"
                alt="WeCare Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Button href="/demo" variant="success">
                  Agende um demo
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
