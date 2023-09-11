import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import formSlice from "../features/formSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        form :formSlice
    }
})