import React from "react";
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
    <div className="head">
      <span className="ps-2 fs-2 text-light">{title}</span>
      <div className="links">
        <div className="link">
          <Link className="text-light text-decoration-none" to="/products">
            Products
          </Link>
        </div>
        <div className="link">
          {isAuth ? (
            <Link className="text-light text-decoration-none" to="/profile">
              Profile
            </Link>
          ) : (
            <Link className="text-light text-decoration-none" to="/login">
              Login
            </Link>
          )}
        </div>
        <div className="link">Cart</div>
      </div>
      <div className="profile-button">
        {isAuth ? (
          <Link
            onClick={() => dispatch(removeUser())}
            className="text-light text-decoration-none"
            to="/"
          >
            Log out
          </Link>
        ) : (
          <Link className="text-light text-decoration-none" to="/login">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};
