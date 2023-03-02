import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  const [show, setShow] = useState(false);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>{title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Link 1</Nav.Link>
          <Nav.Link href="#">Link 2</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
