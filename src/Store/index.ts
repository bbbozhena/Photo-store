import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlice";
import photoSlice from "./Slices/PhotoSlice"

 export const store = configureStore({
    reducer: {
        user: userSlice,
        photos: photoSlice,
    }
 });
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
