import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Photo = {
  title: string;
  src: string;
  add: boolean;
  like: boolean;
  type: string;
};

type PhotoState = {
  list: Photo[];
  loading: boolean;
  error: string | null;
};

export const fetchPhotos = createAsyncThunk<
  Photo[],
  undefined,
  { rejectValue: string }
>("photos/fetchPhotos", async function () {
  const response = await fetch("http://localhost:3000/Photos");

  const data = await response.json();
  return data;
});

const initialState: PhotoState = {
  list: [],
  loading: false,
  error: null,
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  },
});

export default photoSlice.reducer;
