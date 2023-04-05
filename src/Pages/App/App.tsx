import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import "./App.css";
import { LoginPage } from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { Profile } from "../ProfilePage/ProfilePage";
import { ProductsPage } from "../ProductsPage/ProductsPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}

export default App;
