import React from "react";
import { Route, Routes } from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";
import "./App.css";
import {LoginPage} from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { Products } from "../ProductsPage/ProductsPage";
import { Profile } from "../ProfilePage/ProfilePage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
