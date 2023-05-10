import { configureStore } from "@reduxjs/toolkit";
import language from "./slices/language.sile";

export default configureStore({
    reducer:{
        language,
    }
})