import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./App.css";
import Login from "../Login/Login";
import Register from "../Register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
