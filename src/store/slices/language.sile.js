import { createSlice } from "@reduxjs/toolkit";

const languageSlice  = createSlice({
    name: "language",
    initialState: true ,
    reducers: {
        changeLanguage: (state) => {
            const newState = !state
            return newState
        }
    },
})

export const {changeLanguage} = languageSlice.actions

export default languageSlice.reducer