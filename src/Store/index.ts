import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "./Slices/UserSlice";
import {photoSlice} from "./Slices/PhotoSlice"

 const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        photos: photoSlice.reducer,
    }
 });
 export default store;
 export type RootState = ReturnType<typeof store.getState>;
 export type AppDispatch = typeof store.dispatch;
