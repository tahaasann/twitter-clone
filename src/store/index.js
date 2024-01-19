import { configureStore } from "@reduxjs/toolkit";
import auth from "~/store/auth";

const store = configureStore({
    reducer: {
        // store
        auth
    }
})

export default store