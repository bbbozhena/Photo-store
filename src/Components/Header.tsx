import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useAuth } from "../Hooks/UseAuth";
import { useAppDispatch } from "../Hooks/ReduxHooks";
import { removeUser } from "../Store/Slices/UserSlice";
import "./Components.css";

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();

  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <nav className="navbar">
        <Navbar.Brand className="ps-2">{title}</Navbar.Brand>
        <Nav className="links">
          <Nav.Link className="link" href="#">
            Products
          </Nav.Link>
          <Nav.Link className="link" href="#">
            Profile
          </Nav.Link>
        </Nav>
        <div className="profile-button">
          {isAuth ? (
            <span onClick={() => dispatch(removeUser())}>Log out</span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};
