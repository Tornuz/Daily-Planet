import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";

export default function NavbarHome () {
    return (
      <div>
        <Navbar expand="lg" className="fixed-top bg-body-tertiary">
          <Navbar.Brand href="/" className="mx-4">
            Daily-Planet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/business">
                <Nav.Link href="/business">Business</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/entertainment">
                <Nav.Link href="/entertainment">Entertainment</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/health">
                <Nav.Link href="/health">Health</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/science">
                <Nav.Link href="/science">Science</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/sports">
                <Nav.Link href="/sports">Sports</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/technology">
                <Nav.Link href="/technology">Technology</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

