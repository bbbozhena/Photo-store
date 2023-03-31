// import React from "react";
// import { createSlice } from "@reduxjs/toolkit";
// import { Router } from "express";
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//     "products/fetchProducts", async (_, thunkAPI) => {
//        try {
//           //const response = await fetch(`url`); //where you want to fetch data
//           //Your Axios code part.
//           const response = await axios.get(`url`);//where you want to fetch data
//           return await response.json();
//         } catch (error) {
//            return thunkAPI.rejectWithValue({ error: error.message });
//         }
//   });