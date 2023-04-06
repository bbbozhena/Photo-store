import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import PhotoReducer from "./Slices/PhotoSlice"

export const store = configureStore({
    reducer: {
        user: UserSlice,
        photos: PhotoReducer,
    }
 });
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
