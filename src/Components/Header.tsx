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
  return (
    <div className="header">
      <nav className="navbar">
        <Navbar.Brand className="ps-2 text-light">{title}</Navbar.Brand>
        <Nav className="links">
          <Nav.Link className="link" href="#">
          <Link className="text-light text-decoration-none" to="/products">Products</Link>
          </Nav.Link>
          <Nav.Link className="link" href="#">
            Profile
          </Nav.Link>
          <Nav.Link className="link" href="#">
            Cart
          </Nav.Link>
        </Nav>
        <div className="profile-button \">
          {isAuth ? (
            <span onClick={() => dispatch(removeUser())}>Log out</span>
          ) : (
            <Link className="text-light text-decoration-none" to="/login">Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};
